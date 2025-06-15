import { deliveryClient } from "./contentful";

export async function getAllTestimonials() {
  try{
    const entries = await deliveryClient.getEntries({
      content_type:"testimonial",
      order:"sys.createdAt",
    });

    // console.log("Testimonials uit contentful: ", entries.items);
    return entries.items;
  } catch (error){
    console.error("Fout bij ophalen van testimonials: ", error);
    return [];
  }
  
}