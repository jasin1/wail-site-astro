// renderBlogRichText.js

import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function renderNodeToAst(node) {
  switch (node.nodeType) {
    case BLOCKS.PARAGRAPH:
      return {
        type: "p",
        children: node.content.map(renderNodeToAst),
      };
    case BLOCKS.EMBEDDED_ASSET:
      const { file, description } = node.data.target.fields;
      const url = `https:${file.url}`;
      return {
        type: "img",
        props: { src: url, alt: description || "" },
      };
    case INLINES.HYPERLINK:
      return {
        type: "a",
        props: { href: node.data.uri, target: "_blank", rel: "noopener noreferrer" },
        children: node.content.map(renderNodeToAst),
      };
    case "text":
      return node.value;
    // voeg meer cases toe zoals nodig
    default:
      return {
        type: "div",
        children: node.content ? node.content.map(renderNodeToAst) : [],
      };
  }
}

export function renderBlogRichText(content) {
  return content.content.map(renderNodeToAst);
}
