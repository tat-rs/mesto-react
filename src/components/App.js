import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false); //состояние попапа "обновить аватар"

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); //состояние попапа "редактировать профиль"

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false); //состояние попапа "добавить карточку"

  const [selectedCard, setSelectedCard] = React.useState({}) //состояние попапа с изображением

  const [currentUser, setCurrentUser] = React.useState({}); //стейт текущих данных пользователя
  
  //обработчик открытия попапа редактирования аватара профиля
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  //обработчик открытия попапа редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  //обработчик открытия попапа добавления новой карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  
  //обработчик клика по карточке
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  //сброс состояний переменных
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }
  
  //получили данные пользователя
  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='page__content'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm name='edit' title='Редактировать профиль' textOfButton='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>

          <input className="form__item form__item_type_name" id="name-profile" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="form__error name-profile-error"></span>
          <input className="form__item form__item_type_desc" id="desc-profile" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="form__error desc-profile-error"></span>

        </PopupWithForm>

        <PopupWithForm name='new-card' title='Новое место' textOfButton='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>

          <input className="form__item form__item_type_image-subtitle" id="image-subtitle" type="text" name="subtitle" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="form__error image-subtitle-error"></span>
          <input className="form__item form__item_type_image-link" id="image-link" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="form__error image-link-error"></span>

        </PopupWithForm>

        <PopupWithForm name='edit-avatar' title='Обновить аватар' textOfButton='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>

          <input className="form__item form__item_type_image-link" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на фото профиля" required />
          <span className="form__error avatar-link-error"></span>

        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
