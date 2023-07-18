import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";

function CardNav(props) {
  const textContentBio = `bio display`;
  const textContentSkills = `skills display`;
  const textContentTimeline = ` timeline display`;
  const textContentLinks = `skills display`;

  // need to create landingContent variable and content
  const [mainContent, setMainContent] = useState(null);
  const [toggle, setToggle] = useState(false);

  function displayMainContent(contentLink) {
    if (toggle === false && props.title === "Bio") {
      setToggle(!toggle);
      setMainContent(textContentBio);
    } else if (toggle === false && props.title === "Skills") {
      setToggle(!toggle);
      setMainContent(textContentSkills);
    } else if (toggle === false && props.title === "Timeline") {
      setToggle(!toggle);
      setMainContent(textContentTimeline);
    } else if (toggle === false && props.title === "Links") {
      setToggle(!toggle);
      setMainContent(textContentLinks);
    }
  }

  return (
    <div id={props.title} onClick={() => displayMainContent(props.title)}>
      {
        // eslint-disable-next-line
      }
      <ReactMarkdown children={mainContent} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default CardNav;
