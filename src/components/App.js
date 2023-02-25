import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    setisImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setisImagePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          titleBtn="Сохранить"
          children={
            <>
              <input
                className="popup__input popup__input_type_name"
                id="name-input"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                required
              />
              <span className="popup__input-span-error name-input-error"></span>
              <input
                className="popup__input popup__input_type_description"
                id="link-input"
                type="text"
                name="about"
                placeholder="Профессия"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__input-span-error link-input-error"></span>
            </>
          }
        />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="card-add"
          title="Новое место"
          titleBtn="Создать"
          children={
            <>
              <input
                className="popup__input popup__input_type_title"
                id="mesto-input"
                type="text"
                name="pictureName"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__input-span-error mesto-input-error"></span>
              <input
                className="popup__input popup__input_type_picture"
                type="url"
                id="url-input"
                name="picture-link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-span-error url-input-error"></span>
            </>
          }
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="editFoto"
          title="Обновить аватар"
          titleBtn="Да"
          children={
            <>
              <input
                className="popup__input popup__input_type_edit-foto"
                id="avatar-input"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="popup__input-span-error avatar-input-error"></span>
            </>
          }
        />

        <ImagePopup 
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
