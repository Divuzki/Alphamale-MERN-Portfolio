import { spawn } from "child_process";

export const getVideoDurationInSeconds = (filePath) => {
  return new Promise((resolve, reject) => {
    const process = spawn("ffprobe", [
      "-v",
      "error",
      "-show_entries",
      "format=duration",
      "-of",
      "default=noprint_wrappers=1:nokey=1",
      filePath,
    ]);

    let duration = 0;
    process.stdout.on("data", (data) => {
      duration += parseFloat(data.toString());
    });

    process.stderr.on("data", (data) => {
      reject(data.toString());
    });

    process.on("close", (code) => {
      if (code !== 0) {
        reject("Process exited with non-zero status");
      } else {
        resolve(duration);
      }
    });
  });
};
