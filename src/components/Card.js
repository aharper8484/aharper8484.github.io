import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";
import Bio from "../pages/Bio";

function Card(props) {
  const titleCardClass = " cardTitle";
  const textCardClass = " cardText";
  const titleContent = `# ` + props.title;
  const textContent = Bio();
  const [mdContent, setMdContent] = useState(titleContent);
  const [toggle, setToggle] = useState(false);
  const [currentClass, setClass] = useState(titleCardClass);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setToggle(!false);
  //     displayContent();
  //   };

  // TODO - fix toggle
  function displayContent() {
    if (toggle === false) {
      setMdContent(textContent);

      setToggle(!toggle);
      setClass(textCardClass);
    } else {
      setMdContent(titleContent);
      setToggle(!toggle);
      setClass(titleCardClass);
    }
  }

  if (props.contentType === "text") {
    return (
      <div
        className={"textCardContainer " + currentClass}
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
