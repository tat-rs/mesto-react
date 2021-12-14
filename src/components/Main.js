import React from 'react';

function Main(props) {

  //вернули разметку
  return (
    <>
      <main className='content page__section'>
        <section className='profile page__profile'>
          <div className='profile__container'>
            <button className='profile__image-edit' onClick={props.onEditAvatar}>
              <img className='profile__image' src='#' alt='Фото пользователя' />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>Жак-Ив-Кусто</h1>
              <button className='profile__edit link' type='button' aria-label='Редактировать данные профиля' onClick={props.onEditProfile}></button>
              <p className='profile__desc'>Исследователь океана</p>
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