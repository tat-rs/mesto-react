import React from "react";

function ImagePopup() {

  //вернули разметку
  return (
    <>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_transparent">
          <button className="popup__close link" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="" />
          <h2 className="popup__subtitle"></h2>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;