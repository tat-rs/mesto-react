import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithFrom from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''})
  
  //обработчик открытия попапа редактирования аватара профиля
  function handleEditAvatarClick() {
    return setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  //обработчик открытия попапа редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  //обработчик открытия попапа добавления новой карточки
  function handleAddPlaceClick() {
    return setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  
  function handleCardClick(card) {
    setSelectedCard({name: card.name, link: card.link})
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({name: '', link: ''})
  }
  

  return (
    <div className='page__content'>
      <Header />

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithFrom name='edit' title='Редактировать профиль' textOfButton='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>

        <input className="form__item form__item_type_name" id="name-profile" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="form__error name-profile-error"></span>
        <input className="form__item form__item_type_desc" id="desc-profile" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="form__error desc-profile-error"></span>

      </PopupWithFrom>

      <PopupWithFrom name='new-card' title='Новое место' textOfButton='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>

        <input className="form__item form__item_type_image-subtitle" id="image-subtitle" type="text" name="subtitle" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="form__error image-subtitle-error"></span>
        <input className="form__item form__item_type_image-link" id="image-link" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="form__error image-link-error"></span>

      </PopupWithFrom>

      <PopupWithFrom name='edit-avatar' title='Обновить аватар' textOfButton='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>

        <input className="form__item form__item_type_image-link" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на фото профиля" required />
        <span className="form__error avatar-link-error"></span>

      </PopupWithFrom>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

    </div>
  );
}

export default App;
