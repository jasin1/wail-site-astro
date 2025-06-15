import { deliveryClient } from "./contentful";

export async function getAllBlogPosts(preview = false) {

  try {
    const entries = await deliveryClient.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
    });

    // console.log("Fetched from Contentful:", entries.items);

    return entries.items;
  } catch (error) {
    console.error("fout bij ophalen van blogposts: ", error);
    return [];
  }
}
