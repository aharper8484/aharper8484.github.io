import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";

function Card(props) {
  const titleContent = `# ` + props.title;
  const textContent = `markdown content will go here`;
  const [mdContent, setMdContent] = useState(titleContent);
  const [toggle, setToggle] = useState(false);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setToggle(!false);
  //     displayContent();
  //   };

  const displayContent = (toggle) => {
    if (toggle === false) {
      setMdContent(titleContent);
    } else {
      setMdContent(textContent);
    }
  };

  if (props.contentType === "text") {
    return (
      <div
        className="textCardContainer cardTitle cardHidden"
        onClick={() => setToggle(!toggle)}
      >
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown children={mdContent} />
      </div>
    );
  } else if (props.contentType === "image") {
    return (
      <div className="imageCardContainer">
        <img className="cardImage" src={props.image} alt="Profile" />
      </div>
    );
  }
}

export default Card;
