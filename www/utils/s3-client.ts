import AWS from "aws-sdk";

console.log("construting S3 client with params", {
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_SERVER_URL,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

export const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_SERVER_URL,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});
