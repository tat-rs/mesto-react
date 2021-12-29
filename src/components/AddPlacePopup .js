import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

 /*  const [name, setSubtitle] = React.useState('');
  const [link, setLinkImage] = React.useState('');

  function handleSubtitle(evt) {
    setSubtitle(evt.target.value)
  }

  function handleLinkImageChange(evt) {
    setLinkImage(evt.target.value)
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateCards({
      name,
      link,
    });
  } */
  return (
    <>
      <PopupWithForm name='new-card' title='Новое место' textOfButton='Создать' isOpen={props.isOpen} onClose={props.onClose} /* onSubmit={handleSubmit} */>

        <input className="form__item form__item_type_image-subtitle" id="image-subtitle" type="text" name="subtitle" placeholder="Название" minLength="2" maxLength="30" /* value={name || ''} onChange={handleSubtitle} */ required />
        <span className="form__error image-subtitle-error"></span>
        <input className="form__item form__item_type_image-link" id="image-link" type="url" name="link" placeholder="Ссылка на картинку" /* value={link || ''}  *//* onChange={handleLinkImageChange} */ required />
        <span className="form__error image-link-error"></span>

      </PopupWithForm>
    </>
  )
}

export default AddPlacePopup