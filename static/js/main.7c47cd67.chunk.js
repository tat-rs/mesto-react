(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=n(11),i=n(2),l=(n(16),n.p+"static/media/logo.bbe2a6ea.svg"),u=n(0);var d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{className:"header page__header",children:Object(u.jsx)("a",{className:"logo link",href:"https://tat-rs.github.io/mesto-react/",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})})})},m=c.a.createContext();var h=function(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a="cards__delete ".concat(n?"cards__delete_visible":""),s=e.card.likes.some((function(e){return e._id===t._id})),r="cards__button ".concat(s?"cards__button_active":"");return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:"cards__item",children:[Object(u.jsx)("button",{className:a,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onBtnDelete(),e.onCardClick({_id:e.card._id})}}),Object(u.jsx)("img",{className:"cards__image",src:"".concat(e.card.link),alt:"".concat(e.card.name),onClick:function(){e.onCardClick({name:e.card.name,link:e.card.link})}}),Object(u.jsxs)("div",{className:"cards__desc",children:[Object(u.jsx)("h2",{className:"cards__subtitle",children:e.card.name}),Object(u.jsxs)("div",{className:"cards__container-likes",children:[Object(u.jsx)("button",{className:r,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"cards__sum-likes",children:e.card.likes.length})]})]})]})})};var f=function(e){var t=c.a.useContext(m);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("main",{className:"content page__section",children:[Object(u.jsxs)("section",{className:"profile page__profile",children:[Object(u.jsxs)("div",{className:"profile__container",children:[Object(u.jsx)("button",{className:"profile__image-edit",onClick:e.onEditAvatar,children:Object(u.jsx)("img",{className:"profile__image",src:t.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{className:"profile__edit link",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__desc",children:t.about})]})]}),Object(u.jsx)("button",{className:"profile__button link",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"cards page__cards","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438",children:Object(u.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(u.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onBtnDelete:e.onBtnDelete},t._id)}))})})]})})};var j=function(){var e=(new Date).getFullYear();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("footer",{className:"footer page__section",children:Object(u.jsxs)("p",{className:"footer__author",children:["\xa9 ",e," Mesto Russia"]})})})},b=n(4),_=n(5);function p(){var e=c.a.useState({}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState({}),r=Object(i.a)(s,2),o=r[0],l=r[1],u=c.a.useState(!1),d=Object(i.a)(u,2),m=d[0],h=d[1];return{values:n,errors:o,isValid:m,handleChange:function(e){var t=e.target.name,c=e.target.value;a(Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,c))),l(Object(_.a)(Object(_.a)({},o),{},Object(b.a)({},e.target.name,e.target.validationMessage))),h(e.target.closest(".popup__form").checkValidity())},handleReset:function(){a({}),l({}),h(!1)}}}var O=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onMouseDown:e.onClose,children:Object(u.jsxs)("div",{className:"popup__container",onMouseDown:function(e){return e.stopPropagation()},children:[Object(u.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose}),Object(u.jsxs)("form",{className:"popup__form form form_type_".concat(e.name),name:"form-".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(u.jsx)("h2",{className:"form__title",children:"".concat(e.title)}),e.children,Object(u.jsx)("button",{className:"form__button ".concat(e.disabledButton?"form__button_disabled":""),type:"submit",disabled:e.disabledButton,children:e.button})]})]})})})};var x=function(e){var t=c.a.useState(e.textOfButton),n=Object(i.a)(t,2),a=n[0],s=n[1],r=p(),o=r.values,l=r.errors,d=r.isValid,m=r.handleChange,h=r.handleReset;function f(){h(),e.onClose()}return c.a.useEffect((function(){s(e.textOfButton)}),[e.isOpen,e.textOfButton]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textOfButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:f,onSubmit:function(t){t.preventDefault(),e.onAddPlace({subtitle:o.subtitle,link:o.link}),s("\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435..."),f()},button:a,disabledButton:!d,children:[Object(u.jsx)("input",{className:"form__item form__item_type_image-subtitle",id:"image-subtitle",type:"text",name:"subtitle",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:o.subtitle||"",onChange:m,required:!0}),Object(u.jsx)("span",{className:"form__error image-subtitle-error",children:!d&&l.subtitle}),Object(u.jsx)("input",{className:"form__item form__item_type_image-link",id:"image-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:o.link||"",onChange:m,required:!0}),Object(u.jsx)("span",{className:"form__error image-link-error",children:!d&&l.link})]})})};var v=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"popup popup_type_image ".concat(e.card.link&&"popup_opened"),onClick:e.onClose,children:Object(u.jsxs)("div",{className:"popup__container popup__container_transparent",onClick:function(e){return e.stopPropagation()},children:[Object(u.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(u.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(u.jsx)("h2",{className:"popup__subtitle",children:e.card.name})]})})})};var g=function(e){var t=c.a.useContext(m),n=c.a.useState(e.textOfButton),a=Object(i.a)(n,2),s=a[0],r=a[1],o=p(),l=o.values,d=o.errors,h=o.isValid,f=o.handleChange,j=o.handleReset;return c.a.useEffect((function(){l.name=t.name,l.about=t.about,r(e.textOfButton)}),[t,e.isOpen,e.textOfButton]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:function(){j(),e.onClose()},onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:l.name,about:l.about}),r("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...")},button:s,disabledButton:!h,children:[Object(u.jsx)("input",{className:"form__item form__item_type_name",id:"name-profile",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:l.name||"",onChange:f,required:!0}),Object(u.jsx)("span",{className:"form__error name-profile-error",children:!h&&d.name}),Object(u.jsx)("input",{className:"form__item form__item_type_desc",id:"desc-profile",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",value:l.about||"",onChange:f,required:!0}),Object(u.jsx)("span",{className:"form__error desc-profile-error",children:!h&&d.about})]})})};var k=function(e){var t=c.a.useState(e.textOfButton),n=Object(i.a)(t,2),a=n[0],s=n[1],r=p(),o=r.values,l=r.errors,d=r.isValid,m=r.handleChange,h=r.handleReset;function f(){h(),e.onClose()}return c.a.useEffect((function(){s(e.textOfButton)}),[e.isOpen,e.textOfButton]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:f,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:o.avatar}),s("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),f()},button:a,disabledButton:!d,children:[Object(u.jsx)("input",{className:"form__item form__item_type_image-link",id:"avatar-link",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",value:o.avatar||"",onChange:m,required:!0}),Object(u.jsx)("span",{className:"form__error avatar-link-error",children:!d&&l.avatar})]})})},C=n(9),N=n(10),y=new(function(){function e(t){var n=t.url,a=t.headers;Object(C.a)(this,e),this._url=n,this._headers=a}return Object(N.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.subtitle,link:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-30/",headers:{authorization:"3ace1836-34ae-4def-81c7-968efe5e4e17","content-type":"application/json"}});var B=function(e){var t=c.a.useState(e.textOfButton),n=Object(i.a)(t,2),a=n[0],s=n[1];return c.a.useEffect((function(){s(e.textOfButton)}),[e.isOpen,e.textOfButton]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O,{name:"delete-confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,button:a,onSubmit:function(t){t.preventDefault(),e.removeCard(e.card),s("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...")}})})};var S=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),r=Object(i.a)(s,2),l=r[0],h=r[1],b=c.a.useState(!1),_=Object(i.a)(b,2),p=_[0],O=_[1],C=c.a.useState(!1),N=Object(i.a)(C,2),S=N[0],E=N[1],A=c.a.useState({}),L=Object(i.a)(A,2),P=L[0],D=L[1],R=c.a.useState({}),U=Object(i.a)(R,2),F=U[0],w=U[1],T=c.a.useState([]),V=Object(i.a)(T,2),q=V[0],I=V[1];function J(){a(!1),h(!1),O(!1),D({}),E(!1)}return c.a.useEffect((function(){y.getAllCards().then((function(e){I(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){y.getUserInfo().then((function(e){w(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"page__content",children:Object(u.jsxs)(m.Provider,{value:F,children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{onEditAvatar:function(){a(!0)},onEditProfile:function(){h(!0)},onAddPlace:function(){O(!0)},onCardClick:function(e){D(e)},cards:q,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){I((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onBtnDelete:function(){E(!0)}}),Object(u.jsx)(j,{}),Object(u.jsx)(g,{isOpen:l,onClose:J,onUpdateUser:function(e){y.setUserInfo(e).then((function(e){w(e),J()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(u.jsx)(x,{isOpen:p,onClose:J,onAddPlace:function(e){y.addNewCard(e).then((function(e){I([e].concat(Object(o.a)(q))),J()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(u.jsx)(k,{isOpen:n,onClose:J,onUpdateAvatar:function(e){y.setUserAvatar(e).then((function(e){w(e),J()})).catch((function(e){return console.log(e)}))},textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(u.jsx)(v,{card:P,onClose:J}),Object(u.jsx)(B,{isOpen:S,onClose:J,card:P,textOfButton:"\u0414\u0430",removeCard:function(e){y.deleteCard(e._id).then((function(){I((function(t){return t.filter((function(t){return t._id!==e._id}))})),J()})).catch((function(e){return console.log(e)}))}})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7c47cd67.chunk.js.map