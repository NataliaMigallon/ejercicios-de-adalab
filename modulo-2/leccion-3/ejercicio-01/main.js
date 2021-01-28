'use strict';

const imageAvatar = document.querySelector('.user__avatar');

// avatar por defecto

const DEFAULT_AVATAR = 'http://placehold.it/300x300';

// avatar que eligió el usuario al registrarse

let userAvatar = ""; /* 'http://www.fillmurray.com/300/300'; */

imageAvatar.src = userAvatar || DEFAULT_AVATAR;

/* imageAvatar.innerHTML = userAvatar || DEFAULT_AVATAR; */