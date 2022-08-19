import { SmartStream } from "./SmartStream.js";
import "dotenv/config";
import { s3 } from "./FileUploader.js";

const createAwsStream = async (key) => {
  return new Promise((resolve, reject) => {
    const bucketParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    };

    try {
      //   const s3 = resolveS3Instance();

      s3.headObject(bucketParams, (error, data) => {
        if (error) {
          throw error;
        }
        // After getting the data we want from the call to s3.headObject
        // We have everything we need to instantiate our SmartStream class
        // If you want to pass ReadableOptions to the Readable class, you pass the object as the fourth parameter
        const stream = new SmartStream(bucketParams, s3, data.ContentLength);

        resolve(stream);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default createAwsStream;
