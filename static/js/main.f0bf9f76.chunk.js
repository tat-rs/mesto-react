(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),o=n(9),i=n(2),l=(n(14),n.p+"static/media/logo.bbe2a6ea.svg"),u=n(0);var d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{className:"header page__header",children:Object(u.jsx)("a",{className:"logo link",href:"https://tat-rs.github.io/mesto-react/",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})})})},m=c.a.createContext();var h=function(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a="cards__delete ".concat(n?"cards__delete_visible":""),r=e.card.likes.some((function(e){return e._id===t._id})),s="cards__button ".concat(r?"cards__button_active":"");return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:"cards__item",children:[Object(u.jsx)("button",{className:a,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsx)("img",{className:"cards__image",src:"".concat(e.card.link),alt:"".concat(e.card.name),onClick:function(){e.onCardClick({name:e.card.name,link:e.card.link})}}),Object(u.jsxs)("div",{className:"cards__desc",children:[Object(u.jsx)("h2",{className:"cards__subtitle",children:e.card.name}),Object(u.jsxs)("div",{className:"cards__container-likes",children:[Object(u.jsx)("button",{className:s,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"cards__sum-likes",children:e.card.likes.length})]})]})]})})};var _=function(e){var t=c.a.useContext(m);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("main",{className:"content page__section",children:[Object(u.jsxs)("section",{className:"profile page__profile",children:[Object(u.jsxs)("div",{className:"profile__container",children:[Object(u.jsx)("button",{className:"profile__image-edit",onClick:e.onEditAvatar,children:Object(u.jsx)("img",{className:"profile__image",src:t.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{className:"profile__edit link",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__desc",children:t.about})]})]}),Object(u.jsx)("button",{className:"profile__button link",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"cards page__cards","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438",children:Object(u.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(u.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})})};var j=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("footer",{className:"footer page__section",children:Object(u.jsx)("p",{className:"footer__author",children:"\xa9 2020 Mesto Russia"})})})};var p=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onMouseDown:e.onClose,children:Object(u.jsxs)("div",{className:"popup__container",onMouseDown:function(e){return e.stopPropagation()},children:[Object(u.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose}),Object(u.jsxs)("form",{className:"popup__form form form_type_".concat(e.name),name:"form-".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(u.jsx)("h2",{className:"form__title",children:"".concat(e.title)}),e.children,Object(u.jsx)("button",{className:"form__button",type:"submit",children:e.textOfButton})]})]})})})};var f=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),o=Object(i.a)(s,2),l=o[0],d=o[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textOfButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({subtitle:a,link:l}),r(""),d("")},children:[Object(u.jsx)("input",{className:"form__item form__item_type_image-subtitle",id:"image-subtitle",type:"text",name:"subtitle",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:a||"",onChange:function(e){r(e.target.value)},required:!0}),Object(u.jsx)("span",{className:"form__error image-subtitle-error"}),Object(u.jsx)("input",{className:"form__item form__item_type_image-link",id:"image-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l||"",onChange:function(e){d(e.target.value)},required:!0}),Object(u.jsx)("span",{className:"form__error image-link-error"})]})})};var b=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"popup popup_type_image ".concat(e.card.link&&"popup_opened"),onClick:e.onClose,children:Object(u.jsxs)("div",{className:"popup__container popup__container_transparent",onClick:function(e){return e.stopPropagation()},children:[Object(u.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(u.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(u.jsx)("h2",{className:"popup__subtitle",children:e.card.name})]})})})};var O=function(e){var t=c.a.useContext(m),n=c.a.useState(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=c.a.useState(""),l=Object(i.a)(o,2),d=l[0],h=l[1];return c.a.useEffect((function(){s(t.name),h(t.about)}),[t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:d})},children:[Object(u.jsx)("input",{className:"form__item form__item_type_name",id:"name-profile",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:r||"",onChange:function(e){s(e.target.value)},required:!0}),Object(u.jsx)("span",{className:"form__error name-profile-error"}),Object(u.jsx)("input",{className:"form__item form__item_type_desc",id:"desc-profile",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",value:d||"",onChange:function(e){h(e.target.value)},required:!0}),Object(u.jsx)("span",{className:"form__error desc-profile-error"})]})})};var x=function(e){var t=c.a.useRef();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textOfButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},children:[Object(u.jsx)("input",{className:"form__item form__item_type_image-link",id:"avatar-link",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",ref:t,required:!0}),Object(u.jsx)("span",{className:"form__error avatar-link-error"})]})})},g=n(7),v=n(8),k=new(function(){function e(t){var n=t.url,a=t.headers;Object(g.a)(this,e),this._url=n,this._headers=a}return Object(v.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.subtitle,link:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-30/",headers:{authorization:"3ace1836-34ae-4def-81c7-968efe5e4e17","content-type":"application/json"}});var C=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),s=Object(i.a)(r,2),l=s[0],h=s[1],p=c.a.useState(!1),g=Object(i.a)(p,2),v=g[0],C=g[1],N=c.a.useState({}),y=Object(i.a)(N,2),S=y[0],E=y[1],A=c.a.useState({}),L=Object(i.a)(A,2),P=L[0],U=L[1],D=c.a.useState([]),R=Object(i.a)(D,2),w=R[0],F=R[1];function T(){a(!1),h(!1),C(!1),E({})}return c.a.useEffect((function(){k.getAllCards().then((function(e){F(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){k.getUserInfo().then((function(e){U(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"page__content",children:Object(u.jsxs)(m.Provider,{value:P,children:[Object(u.jsx)(d,{}),Object(u.jsx)(_,{onEditAvatar:function(){a(!0)},onEditProfile:function(){h(!0)},onAddPlace:function(){C(!0)},onCardClick:function(e){E(e)},cards:w,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===P._id}));k.changeLikeCardStatus(e._id,!t).then((function(t){F((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){F((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(j,{}),Object(u.jsx)(O,{isOpen:l,onClose:T,onUpdateUser:function(e){k.setUserInfo(e).then((function(e){U(e),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(f,{isOpen:v,onClose:T,onAddPlace:function(e){k.addNewCard(e).then((function(e){F([e].concat(Object(o.a)(w))),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(x,{isOpen:n,onClose:T,onUpdateAvatar:function(e){k.setUserAvatar(e).then((function(e){U(e),T()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(b,{card:S,onClose:T})]})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f0bf9f76.chunk.js.map