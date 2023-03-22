import { MediaSchema as Media } from "../models/media.js";
import { Category, Subcategory } from "../models/category.js";
import asyncHandler from "express-async-handler";
import upload, { deleteMedia } from "../services/FileUploader.js";
import createAwsStream from "../services/StreamClient.js";
import { getVideoDurationInSeconds } from "../services/get_video_duration.js";
/**
@desc GET Files
@route GET /api/media
@access Private
*/
export const getFiles = asyncHandler(async (req, res) => {
  const files = await Media.find();
  res.status(200).send(files);
});

/**
@desc Create File
@route POST /api/media
@access Private
*/

export const createMedia = asyncHandler(async (req, res) => {
  const body = req.body;
  const files = req.files;
  let isVideo = files["video"] && files["video"].length > 0;
  let isImage = files["image"] && files["image"].length > 0;

  if (!isVideo && !isImage) {
    res.status(400);
    throw new Error("Please add either an image or a video");
  }

  const category = await Category.findOne({ name: body.category });

  if (!category) {
    res.status(400);
    throw new Error("Invalid category");
  }

  const subcategory = await Subcategory.findOne({
    name: body.subcategory,
    category: category.id,
  });

  let format = isImage
    ? files["image"][0].mimetype
    : isVideo
    ? files["video"][0].mimetype
    : "None";

  const uploadedFiles = {};
  if (isImage) {
    uploadedFiles["image"] = await upload.single("image")(req, res);
  }

  if (isVideo) {
    const video = files["video"][0];
    const duration = await getVideoDurationInSeconds(video.path);
    const preview = duration < 10 ? video.location : null;

    if (preview) {
      uploadedFiles["preview"] = { location: preview };
    }

    uploadedFiles["video"] = await upload.single("video")(req, res);
  }

  const newMedia = await Media.create({
    title: body.title,
    video: isVideo ? uploadedFiles["video"].location : null,
    image: isImage ? uploadedFiles["image"].location : null,
    preview: isVideo ? uploadedFiles["preview"].location : null,
    desc: body.desc,
    format: format,
    category: category.id,
    subcategory: subcategory ? subcategory.id : null,
  });

  res.status(201).json(newMedia);
});

/**
@desc GET File
@route GET /api/media/:id
@access Private
*/
export const getFile = asyncHandler(async (req, res) => {
  const foundfile = await Media.findById(req.params.id);
  res.status(200).json(foundfile);
});

/**
@desc Update File
@route PATCH /api/media/:id
@access Private
*/
export const updateFile = asyncHandler(async (req, res) => {
  // const { format, image, video, title } = req.body;
  const data = await Media.findById(req.params.id);
  if (!data) {
    res.status(404);
    throw new Error("File not found");
  }
  // if (format) file.format = format;
  // if (image) file.image = image;
  // if (video) file.video = video;
  // if (title) file.title = title;

  const updatedFile = await Media.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedFile);
});

/**
@desc Delete File
@route DELETE /api/media/:id
@access Private
*/
export const deleteFile = asyncHandler(async (req, res) => {
  const data = await Media.findById(req.params.id);
  if (!data) {
    res.status(404);
    throw new Error("File not found");
  } else {
    let removeFile = data.image ? data.image : data.video && data.video.main;
    if (removeFile) {
      deleteMedia(data, removeFile);
    }
    if (data.video && data.video.preview) {
      deleteMedia(data, data.video.preview);
    }
  }
  await data.remove();
  res.status(200).send({ id: req.params.id });
});

export const StreamVideo = asyncHandler(async (req, res) => {
  const data = await Media.findById(req.params.id);
  if (!data) {
    res.status(404);
    throw new Error("Video not found");
  }
  if (data && !data.video) {
    res.status(400);
    throw new Error("Video not found");
  }
  // Create the smart stream
  const stream = await createAwsStream(
    `media/owner/${data.format.split("/")[0]}s/${data.video.split("/")[6]}`
  );
  // Pipe it into the response
  stream.pipe(res);
});
