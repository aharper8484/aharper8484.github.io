function CardToggle(card) {
  card.classList.toggle("card-revealed");

  if (!card.classList.contains("card-revealed"))
    card.classList.toggle("card-hidden");
  else if (
    card.classList.contains("card-revealed") &&
    card.classList.contains("card-hidden")
  )
    card.classList.toggle("card-revealed");

  return card.classList;
}

export default CardToggle;
