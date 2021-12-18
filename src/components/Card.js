import React from "react";

function Card(props) {
  //сохранение данных карточки при клике
  function handleClick() {
    props.onCardClick({
      name: props.card.name, 
      link: props.card.link
    })
  }
  
  return (
    <>
      <li className='cards__item'>
        <button className='cards__delete' type='button' aria-label='Удалить'></button>
        <img className='cards__image' src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick} />
        <div className='cards__desc'>
          <h2 className='cards__subtitle'>{props.card.name}</h2>
          <div className='cards__container-likes'>
            <button className='cards__button' type='button' aria-label='Лайк'></button>
            <p className='cards__sum-likes'>{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;