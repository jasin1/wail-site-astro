export function processImageAsset(asset){
  if(!asset || !asset.fields || !asset.fields.file){
    return null;
  }
  return{
    url:`https:${asset.fields.file.url}`,
    alt:asset.fields.description || asset.fields.title || '',
    width: asset.fields.file.details?.image?.width,
    height:asset.fields.file.details?.image?.height,
    title: asset.fields.title || ''
  };
}

export function getImageUrl(asset, transformation={}){
  if(!asset || !asset.fields || !asset.fields.file) return null;

  const baseUrl = `https:${asset.fields.file.url}`;

  if(Object.keys(transformations).length >0){
    const params = new URLSearchParams(transformations).toString();
    return `${baseUrl}?${params}`;
  }

  return baseUrl;
}