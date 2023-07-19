import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

function Card(props) {
  const mainContent = `# Landing Page Content to be built here!`;
  const textContentSkills = `
  # SKILLS
  * HTML
  * CSS (SaSS)
  * JavaScript (ReactJS, NodeJS, Express)
  * Wordpress (PHP, SQL)
  `;
  const textContentTimeline = `Timeline to be completed`;
  const textContentLinks = `
  # LINKS
  * Blog Site (TBC)
  * InHealthcare
  `;
  const textContentBio = `
  # BIO

  A developer with a background in International Trade. I'm currently an Application Developer for InHealthcare and in my spare time I study JavaScript, specifically the MERN stack. When I’m not coding, I'm a keen writer, screenwriter, musician, and artist.
  
  Originally from the Black Country, West Midlands - now residing in Skipton, North Yorkshire with my wife, son, dog and two cats.
  
  In 2020, during the global pandemic, furloughed from my role as an Export Specialist and disillusioned by the impending complications of Brexit, I decided to follow a new career path. After deliberating my transferrable skills of being organised, logical and analytical with data – combined with my creativity I realised that programming would be a fulfilling career that I could thrive in.
  
  Following two years of balancing full-time studies at the University of Huddersfield (BSc Web Programming) and part-time work in International Trade I left my studies after being offered the role of Application Developer.
  
  [InHealthcare](https://www.inhealthcare.co.uk/) provide digital pathway services to the Healthcare sector to improve and innovate how certain conditions are handled. There are many success stories where hospital beds are freed up and patient monitoring has helped improve the lives of many.
  
  Using Agile sprint methodologies, as well as using the in-house IDE to design and build these services, my day-to-day tasks have spread to automated testing and composing user stories based upon requirements gathered from the client. Accuracy and efficiency are vital for these services so my ability to solve problems and analyse complex documents have been helpful. I find it rewarding to know that my work is improving the lives of others.
  
  Notable projects are:
  
  - [Priory](https://www.priorygroup.com/)
  - [Health Call Frailty Virtual Ward](https://nhshealthcall.co.uk/product/nhs-virtual-ward/)
  
  Technologies used at InHealthcare:
  
  Java, BPBN, Groovy, Liquid, SQL, Cypress (for testing) etc etc
  
  My long-term goal is to be a senior developer building products that make the world a better place. I'm currently learning React (with which this page has been created) but I am also in the process of building a Wordpress Theme that will eventually be home to a blog I will create to help equip others with the tools and advice needed to become developers.
  
  Technologies learned outside of InHealthcare:
  
  HTML, CSS (SaSS), JavaScript (Typescript, React, NodeJS, Express), Wordpress (PHP)`;

  if (props.contentType === "bio") {
    return (
      <div className={"textCardContainer"} id="bio">
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown children={textContentBio} remarkPlugins={[remarkGfm]} />
      </div>
    );
  } else if (props.contentType === "skills") {
    return (
      <div className={"textCardContainer"} id="skills">
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown
          children={textContentSkills}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    );
  } else if (props.contentType === "timeline") {
    return (
      <div className={"textCardContainer"} id="timeline">
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown
          children={textContentTimeline}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    );
  } else if (props.contentType === "links") {
    return (
      <div className={"textCardContainer"} id="links">
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown
          children={textContentLinks}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    );
  } else {
    return (
      <div className={"textCardContainer"} id={props.title}>
        {
          // eslint-disable-next-line
        }
        <ReactMarkdown children={mainContent} remarkPlugins={[remarkGfm]} />
      </div>
    );
  }
}

export default Card;
