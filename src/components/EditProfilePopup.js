import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUserData = React.useContext(CurrentUserContext); //подписываемся на контекст

  const [name, setName] = React.useState(''); //переменная состояния имени пользователя
  const [description, setDescription ] = React.useState(''); //переменная состояния описания пользователя

  //изменяем значение описания на вводимое значение в инпут
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }
  //изменяем значение имени на вводимое значение в инпут
  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUserData.name);
    setDescription(currentUserData.about);
  }, [currentUserData, props.isOpen]); 

  //функция обновления данных пользователя по сабмиту
  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
  
    // Передаём значения имени и описания во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <>
      <PopupWithForm name='edit' title='Редактировать профиль' textOfButton='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>

        <input className="form__item form__item_type_name" id="name-profile" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" value={name || ''} onChange={handleNameChange} required />
        <span className="form__error name-profile-error"></span>
        <input className="form__item form__item_type_desc" id="desc-profile" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" value={description || ''} onChange={handleDescriptionChange} required />
        <span className="form__error desc-profile-error"></span>

      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup