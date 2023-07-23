import "../components/Timeline.css";

function Timeline() {
  const items = document.querySelectorAll(".timeline-section li");
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);

  return (
    <main>
      <section className="intro-textTL">
        <div className="containerTL">
          <h1>Tutorial Timeline</h1>
          <p>A timeline of my accomplishments.</p>
        </div>
      </section>

      <section className="timeline-sectionTL">
        <uL>
          <li>
            <div>
              <time>2001</time>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2002</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2004</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2006</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2008</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2010</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2012</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2014</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2016</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2019</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2020</time> This is a picture of my first hackathon (Add an
              image of your choice).
              <img src="" alt="" />
            </div>
          </li>

          <li>
            <div>
              <time>2021</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>

          <li>
            <div>
              <time>2022</time> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt nostrum quidem eius repudiandae nam,
              nemo fuga architecto possimus id at rem beatae consequuntur dolor
              commodi.
            </div>
          </li>
        </uL>
      </section>
    </main>
  );
}

export default Timeline;
