import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    avatarRef.current.value = '';

  } 

  return (
    <>
    <PopupWithForm name='edit-avatar' title='Обновить аватар' textOfButton='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >

      <input className="form__item form__item_type_image-link" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на фото профиля" ref={avatarRef} required />
      <span className="form__error avatar-link-error"></span>

    </PopupWithForm>
    </>
  )
}

export default EditAvatarPopup
