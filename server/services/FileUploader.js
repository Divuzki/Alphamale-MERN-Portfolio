import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_ACCESS_SECRET_KEY;

export const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

export const deleteMedia = (data, path) => {
  s3.deleteObject(
    {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `media/owner/${data.format.split("/")[0]}s/${path.split("/")[6]}`,
    },
    () => {}
  );
};

const path = uuidv4();
export const s3ParamsConfig = {
  s3: s3,
  acl: "public-read",
  bucket: bucketName,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: path });
  },
  key: function (req, file, cb) {
    cb(
      null,
      "media/owner/" +
        file.mimetype.split("/")[0] +
        "s/" +
        path +
        "." +
        file.originalname.split(".")[1]
    );
  },
};
const upload = multer({
  storage: multerS3(s3ParamsConfig),
});

export default upload;
