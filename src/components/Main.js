import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, userCards]) => {
        setUserData(userData);
        setCards(userCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile" aria-label="профиль">
          <div className="profile__content">
            <div className="profile__foto-block">
              <img
                className="profile__foto"
                src={userData.avatar}
                alt="Аватар"
              />
              <button
                className="profile__edit-foto-btn"
                type="button"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userData.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
              <p className="profile__description">{userData.about}</p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="elements" aria-label="Элементы">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
