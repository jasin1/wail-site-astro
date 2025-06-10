import { deliveryClient } from "./contentful";

export async function getBlogPostBySlug(slug){
  try{
    const entries = await deliveryClient.getEntries({
      content_type:"blogPost",
      "fields.slug":slug,
      limit:1,
    });

    if (entries.items.length >0){
      return entries.items[0];
    }else{
      return null;
    }
  } catch(error){
      console.error("Fout bij ophalen van blogpost op slug: ", error);
      return null;
    }
}