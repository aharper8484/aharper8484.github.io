import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";

function CardNav(props) {
  const titleContent = `# ` + props.title;
  const textContentBio = `bio display`;
  const textContentSkills = `skills display`;
  const textContentTimeline = ` timeline display`;
  const textContentLinks = `skills display`;
  const landingContent = `main landing page please`;

  // need to create landingContent variable and content
  const [mainContent, setMainContent] = useState(titleContent);
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
    } else {
      setMainContent(titleContent);
      setToggle(!toggle);
    }
  }

  return (
    <div
      id={props.title}
      className="mainNavLink"
      onClick={() => displayMainContent(props.title)}
    >
      {
        // eslint-disable-next-line
      }
      <ReactMarkdown children={mainContent} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default CardNav;
