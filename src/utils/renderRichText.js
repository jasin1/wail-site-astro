import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const renderOptions = {
  renderText: (text) =>{
    return text.split('\n').join('<br />');
  }
};

export function renderRichText(content){
  return documentToHtmlString(content, renderOptions);
}