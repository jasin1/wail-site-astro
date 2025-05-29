import { createClient } from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const deliveryToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN;

export const deliveryClient = createClient({
  space,
  accessToken: deliveryToken,
});

export const previewClient = createClient({
  space,
  accessToken: previewToken,
  host: "preview.contentful.com",
});
