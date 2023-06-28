import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./App.css";

function Post() {
  return (
    <div className="Post">
      <ReactMarkdown>### This is the title</ReactMarkdown>
      <ReactMarkdown>
        this should be a paragraph on multiple lines
      </ReactMarkdown>
      <ReactMarkdown>## Another header</ReactMarkdown>
      <ReactMarkdown>
        And another long paragraph where I don't know where it starts and ends
      </ReactMarkdown>
    </div>
  );
}

export default Post;
