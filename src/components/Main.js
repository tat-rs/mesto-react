import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);//хук состояния карточки 

  const currentUserData = React.useContext(CurrentUserContext); //подключаем контект текущих данных пользователя

  //получили массив карточек
  React.useEffect(() => {
    api.getAllCards()
      .then((cardData) => {
        setCards(cardData)
      })
      .catch(err => console.log(err))
  }, [])

  //функция постановки лайка/дизлайк
  function handleCardLike(card) {
    const isLiked = card.likes.some(element => element._id === currentUserData._id); // проверяем, есть ли уже лайк на этой карточке
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((element) => element._id === card._id ? newCard : element));
    })
      .catch(err => console.log(err))
  }
  
  //функция удаления карточки
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые массив карточек
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter(element => element._id !== card._id))
      })
  }
  
  return (
    <>
      <main className='content page__section'>
        <section className='profile page__profile'>
          <div className='profile__container'>
            <button className='profile__image-edit' onClick={props.onEditAvatar}>
              <img className='profile__image' src={currentUserData.avatar} alt='Фото пользователя' />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>{currentUserData.name}</h1>
              <button className='profile__edit link' type='button' aria-label='Редактировать данные профиля' onClick={props.onEditProfile}></button>
              <p className='profile__desc'>{currentUserData.about}</p>
            </div>
          </div>
          <button className='profile__button link' type='button' aria-label='Добавить новую карточку' onClick={props.onAddPlace}></button>
        </section>

          <section className='cards page__cards' aria-label='Карточки с изображениями'>
            <ul className='cards__list'>
              
              {cards.map((card) => (
                <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
              ))}
            </ul>
          </section>
      </main>

    </>
  );
}

export default Main;