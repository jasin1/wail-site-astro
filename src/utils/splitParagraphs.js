export function splitParagraphs(text){
  if(typeof text !== 'string') return [];
  return text.split(/\n\s*\n/).filter(Boolean);
}