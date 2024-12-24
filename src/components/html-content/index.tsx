import { marked } from "marked";
import { FC } from "react";

const HtmlContent: FC<{ content: string }> = ({ content }) => {
  marked.setOptions({ breaks: true, gfm: true });
  const formattedContent = content.replace(/\n\n/g, "\n<br>\n\n");
  return <div dangerouslySetInnerHTML={{ __html: marked(formattedContent) }} />;
};

export default HtmlContent;
