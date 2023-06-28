import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

const postContent = `
# Blog - First Post
This is an example of my first ever blog \n\n post to appear in my React based blog

## This is a H2

And

### H3 header is here`;

function Post() {
  return <ReactMarkdown children={postContent} remarkPlugins={[remarkGfm]} />;
}

export default Post;
