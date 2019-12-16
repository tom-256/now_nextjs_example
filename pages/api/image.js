import { Storage } from "@google-cloud/storage";

export default async (req, res) => {
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    credentials: JSON.parse(
      Buffer.from(process.env.GCLOUD_CREDENTIALS || "", "base64").toString()
    )
  });
  const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
  const file = await bucket.file('dog.png').get();
  const mediaLink = file[0].metadata.mediaLink;
  res.status(200).json({
    src: mediaLink
  });
};
