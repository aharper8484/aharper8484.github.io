import "../components/Timeline.css";

function Timeline() {
  const accentColour1 = "#41516C";

  return (
    <div>
      <h1>UL timeline cards</h1>
      <ul>
        <li style={{ background: `#41516C` }}>
          <div className="dateTL">2002</div>
          <div className="titleTL">Title 1</div>
          <div className="descrTL">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
            consequatur laboriosam!
          </div>
        </li>
        <li style={{ background: `#41516C` }}>
          <div className="dateTL">2007</div>
          <div className="titleTL">Title 2</div>
          <div className="descrTL">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            adipisci nobis nostrum vero nihil veniam.
          </div>
        </li>
        <li style={{ background: `#41516C` }}>
          <div className="dateTL">2012</div>
          <div className="titleTL">Title 3</div>
          <div className="descrTL">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
            consequuntur soluta placeat iure totam commodi repellendus ea
            delectus, libero fugit quod reprehenderit, sequi quo, et dolorum
            saepe nulla hic.
          </div>
        </li>
        <li style={{ background: `#41516C` }}>
          <div className="dateTL">2017</div>
          <div className="titleTL">Title 4</div>
          <div className="descrTL">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            cumque.
          </div>
        </li>
        <li style={{ background: `#41516C` }}>
          <div className="dateTL">2022</div>
          <div className="titleTL">Title 5</div>
          <div className="descrTL">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
