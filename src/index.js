import { header } from './header.js';
import { home } from './home.js';
document.body.appendChild(header);
header.insertAdjacentElement('afterend', home);

console.log('Welcome!');
