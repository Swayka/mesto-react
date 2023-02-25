import React from "react";

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <article className="element">
      <button className="element__delete" type="button"></button>
      <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
      <div className="element__item">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button className="element__button-like" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );

}
export default Card;