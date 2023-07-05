function Card(props) {
  return (
    <div className="itemContainer cardTitle cardHidden">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Card;
