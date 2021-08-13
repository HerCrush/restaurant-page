import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const nav = document.createElement('nav');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

homeBtn.textContent = 'HOME';
menuBtn.textContent = 'MENU';
contactBtn.textContent = 'CONTACT';

nav.append(homeBtn, menuBtn, contactBtn);
nav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', loadTab));

document.querySelector('body').prepend(nav);

loadHome();

function loadTab(e) {
    const clicked = document.querySelector('.clicked');
    if(clicked) {
        clicked.classList.remove('clicked');
        clicked.removeAttribute('disabled');
    }

    e.target.classList.add('clicked');

    document.querySelector('#content div').remove();

    switch(e.target.textContent) {
        case 'HOME':
            loadHome();
            break;
        case 'MENU':
            loadMenu();
            break;
        case 'CONTACT':
            loadContact();
            break;
    }

    e.target.setAttribute('disabled', 'true');
}