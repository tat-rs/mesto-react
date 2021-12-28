import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  return (
    <>
    <PopupWithForm name='edit-avatar' title='Обновить аватар' textOfButton='Сохранить' isOpen={props.isOpen} onClose={props.onClose} >

      <input className="form__item form__item_type_image-link" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на фото профиля" required />
      <span className="form__error avatar-link-error"></span>

    </PopupWithForm>
    </>
  )
}

export default EditAvatarPopup
