import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  /* const currentUserData = React.useContext(CurrentUserContext);  */

  const [name, setName] = React.useState('');
  const [description , setDescription ] = React.useState('');

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  return (
    <>
      <PopupWithForm name='edit' title='Редактировать профиль' textOfButton='Сохранить' isOpen={props.isOpen} onClose={props.onClose} >

        <input className="form__item form__item_type_name" id="name-profile" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" value={name} onChange={handleNameChange} required />
        <span className="form__error name-profile-error"></span>
        <input className="form__item form__item_type_desc" id="desc-profile" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} required />
        <span className="form__error desc-profile-error"></span>

      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup