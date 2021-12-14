import React from 'react';
import api from '../utils/api';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  function setDefaultUserName(name) {
    setUserName(name)
  }

  function setDefaultUserDesc(desc) {
    setUserDescription(desc)
  }

  function setDefaultUserAvatar(avatar) {
    setUserAvatar(avatar)
  }

  let userId = null;

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        userId = userData._id;
        setDefaultUserName(userData.name);
        setDefaultUserDesc(userData.about);
        setDefaultUserAvatar(userData.avatar);
      })
  }, [])
  //вернули разметку
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

            </ul>
          </section>
      </main>

    </>
  );
}

export default Main;