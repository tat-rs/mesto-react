import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [subtitle, setSubtitle] = React.useState(''); //переменная состояния названия карточки
  const [link, setLink] = React.useState(''); //переменная состояния ссылки на изображение карточки
  const [loader, setLoader] = React.useState(props.textOfButton); //начальное значение кнопки

  //изменяем значение названия карточки на вводимое значение в инпут
  function handlSubtitleChange(evt) {
    setSubtitle(evt.target.value)
  }

  //изменяем значение ссылки на изображение карточки на вводимое значение в инпут
  function handlLinkChange(evt) {
    setLink(evt.target.value)
  }
  
  //очищаем значение инпутов при монтировании
  React.useEffect(() => {
    setSubtitle('');
    setLink('');
    setLoader(props.textOfButton);
  }, [props.isOpen, props.textOfButton]);

  //передаем новые значения инпутов по сабмиту
  function handleSubmit(evt) {
    // отменяем действие браузера по умолчанию
    evt.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик (название и ссылка на изображение)
    props.onAddPlace({
      subtitle,
      link,
    });

    setLoader('Создание...')

  }

  return (
    <>
      <PopupWithForm name='new-card' title='Новое место' textOfButton='Создать' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} button={loader}>

        <input className="form__item form__item_type_image-subtitle" id="image-subtitle" type="text" name="subtitle" placeholder="Название" minLength="2" maxLength="30" value={subtitle || ''} onChange={handlSubtitleChange} required />
        <span className="form__error image-subtitle-error"></span>
        <input className="form__item form__item_type_image-link" id="image-link" type="url" name="link" placeholder="Ссылка на картинку" value={link || ''} onChange={handlLinkChange} required />
        <span className="form__error image-link-error"></span>

      </PopupWithForm>
    </>
  )
}

export default AddPlacePopup