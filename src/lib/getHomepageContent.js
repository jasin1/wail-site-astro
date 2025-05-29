import { deliveryClient, previewClient } from './contentful.js';

export async function getHomepageContent(preview = false){
  const client = preview ? previewClient : deliveryClient;

  try {
    const entries = await client.getEntries({
      content_type:'homepage',
      limit: 1,
    });

    if(entries.items.length>0){
      return entries.items[0].fields;
    }

    return null;
  } catch (error) {
    console.error('Fout bij ophalen homepage content:', error);
    return null;
  }
}