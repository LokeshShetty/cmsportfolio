//joining sanity with the react app
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: "i76qipir",
  dataset: "production",
  apiVersion: "2024-03-26",
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:
    "sk7vUdxSMd69RWV0UaJOGmn4cWoC9bNKjc7nAQvLH8VMnHTTaqCprpqdF0GOXxuF8dOrkp7XX1nwrt2HQWOlRidUM5TS80Ga4yBaHoJACgrkrc2hwOw3ni4Rtla1e7h1FCPwehcgnZWsviAsDJZMuPfRdiKLhOuwDgrHHHAz1wVNlkL8iV6E",
});

const builder = imageUrlBuilder(client); //used for the images
export const urlFor = (source) => builder.image(source);
