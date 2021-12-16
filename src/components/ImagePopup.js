import React from "react";

function ImagePopup(props) {
console.log(props)
  //вернули разметку
  return (
    <>
      <div className={props.card.link ? ("popup popup_type_image popup_opened") : ("popup popup_type_image")} onClick={props.onClose}>
        <div className="popup__container popup__container_transparent" onClick={(evt) => evt.stopPropagation()}>
          <button className="popup__close link" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <h2 className="popup__subtitle"></h2>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;