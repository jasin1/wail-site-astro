import { deliveryClient, previewClient } from './contentful.js';

export async function getSingleEntry(contentType, preview = false) {
  const client = preview ? previewClient : deliveryClient;

  try {
    const entries = await client.getEntries({
      content_type: contentType,
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0].fields;
    }

    return null;
  } catch (error) {
    console.error(`Fout bij ophalen ${contentType} content:`, error);
    return null;
  }
}