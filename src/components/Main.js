import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');//хук состояния имени профиля
  const [userDescription, setUserDescription] = React.useState(''); //хук состояния "о себе"
  const [userAvatar, setUserAvatar] = React.useState(''); //хук состояния аватара профиля

  const [cards, setCards] = React.useState([]);//хук состояния карточки

  //получили данные пользователя
  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch(err => console.log(err))
  }, [])

  //получили массив карточек
  React.useEffect(() => {
    api.getAllCards()
      .then((cardData) => {
        setCards(cardData)
      })
      .catch(err => console.log(err))
  }, [])

  
  return (
    <>
      <main className='content page__section'>
        <section className='profile page__profile'>
          <div className='profile__container'>
            <button className='profile__image-edit' onClick={props.onEditAvatar}>
              <img className='profile__image' src={`${userAvatar}`} alt='Фото пользователя' />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>{userName}</h1>
              <button className='profile__edit link' type='button' aria-label='Редактировать данные профиля' onClick={props.onEditProfile}></button>
              <p className='profile__desc'>{userDescription}</p>
            </div>
          </div>
          <button className='profile__button link' type='button' aria-label='Добавить новую карточку' onClick={props.onAddPlace}></button>
        </section>

          <section className='cards page__cards' aria-label='Карточки с изображениями'>
            <ul className='cards__list'>
              
              {cards.map((card) => (
                <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
              ))}
            </ul>
          </section>
      </main>

    </>
  );
}

export default Main;