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

  // TODO - fix toggle
  const displayContent = () => {
    if (toggle === false) {
      setMdContent(textContent);
      setToggle(!toggle);
    } else {
      setMdContent(titleContent);
      setToggle(toggle);
    }
  };

  if (props.contentType === "text") {
    return (
      <div
        className="textCardContainer cardTitle cardHidden"
        onClick={() => displayContent()}
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
  } else if (props.contentType === "linkage") {
    return (
      <div className="linkCardContainer">
        <div className="linkCardGrid">
          <div className="linkCardItem">
            <img className="iconImage" src={props.githubIcon} alt=""></img>
          </div>
          <div className="linkCardItem">
            <img className="iconImage" src={props.linkedinIcon} alt=""></img>
          </div>
          <div className="linkCardItem">
            <img className="iconImage" src={props.resumeIcon} alt=""></img>
          </div>
          <div className="linkCardItem linkText">
            <ReactMarkdown>**aharper8484@gmail.com**</ReactMarkdown>
          </div>
          <div className="linkCardItem linkText">
            <ReactMarkdown>**07980686594**</ReactMarkdown>
          </div>
          <div className="linkCardItem linkText">
            <ReactMarkdown>**Website Link**</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
