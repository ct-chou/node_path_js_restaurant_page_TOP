// const body = document.querySelector('body');
const header = document.createElement('header');

document.body.appendChild(header);
const content = document.createElement('div');
content.id = 'content';
header.appendChild(content);

const nav = document.createElement('nav');
const home_btn = document.createElement('button');
home_btn.textContent = 'Home';
nav.appendChild(home_btn);
const menu_btn = document.createElement('button');
menu_btn.textContent = 'Menu';
nav.appendChild(menu_btn);
const about_btn = document.createElement('button');
about_btn.textContent = 'About';
nav.appendChild(about_btn);
content.appendChild(nav);

alert('Welcome!');
