import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const renderOptions = {
  renderText: (text) => {
    return text.split('\n').join('<br />');
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = node.data.target;
      if (asset && asset.fields && asset.fields.file) {
        const { file, title, description } = asset.fields;
        const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
        const alt = title || description || '';
        return `<img src="${url}" alt="${alt}" class="embedded-image" />`;
      }
      return '';
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      // Handle embedded entries if needed
      return '';
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Handle embedded entries if needed
      return '';
    }
  }
};

export function renderRichText(content) {
  return documentToHtmlString(content, renderOptions);
}



// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// export const renderOptions = {
//   renderText: (text) =>{
//     return text.split('\n').join('<br />');
//   }
// };

// export function renderRichText(content){
//   return documentToHtmlString(content, renderOptions);
// }

// export default function RichText({ content }) {
//   return <div className="rich-text">{documentToReactComponents(content)}</div>;
// }
