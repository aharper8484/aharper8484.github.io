import "./App.css";
import data from "../assets/testdata.json";

const words = data.postContent;

function Post() {
  return (
    <div>
      <p>{words}</p>
    </div>
  );
}

export default Post;
