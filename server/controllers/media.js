import { MediaSchema as Media } from "../models/media.js";
import asyncHandler from "express-async-handler";
import { deleteMedia } from "../services/FileUploader.js";
import createAwsStream from "../services/StreamClient.js";

/* 
@desc GET Files
@route GET /api/media
@access Private
*/
export const getFiles = asyncHandler(async (req, res) => {
  const files = await Media.find();
  res.status(200).send(files);
});

/* 
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
  let format = isImage
    ? files["image"][0].mimetype
    : isVideo
    ? files["video"][0].mimetype
    : "None";
  const newMedia = await Media.create({
    title: body.title,
    video: isVideo ? files["video"][0].location : null,
    image: isImage ? files["image"][0].location : null,
    desc: body.desc,
    format: format,
  });
  // files.push({ ...body, id: uuidv4() });
  res.send(newMedia);
});

/* 
@desc GET File
@route GET /api/media/:id
@access Private
*/
export const getFile = asyncHandler(async (req, res) => {
  const foundfile = await Media.findById(req.params.id);
  res.status(200).json(foundfile);
});

/* 
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

/* 
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
