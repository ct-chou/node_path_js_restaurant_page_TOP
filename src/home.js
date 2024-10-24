import greekYogurtImage from './greek-yogurt.jpg';
const home = document.createElement('div');
home.id = 'content';

const homeTitle = document.createElement('h1');
homeTitle.textContent = 'Olympus Delight Yogurt';
home.appendChild(homeTitle);

const intro = document.createElement('section');
intro.id = 'intro';
const intro_p1 = document.createElement('p');
intro_p1.textContent = 'Olympus Delight Yogurt is a family-owned business that has been making yogurt for over 100 years. Our yogurt is made from the finest ingredients and is free from artificial preservatives, colors, and flavors. We take pride in our traditional methods of yogurt making and are committed to providing our customers with the best-tasting yogurt possible.';
intro.appendChild(intro_p1);
home.appendChild(intro);

const greekYogurt = document.createElement('img');
greekYogurt.src = greekYogurtImage;
greekYogurt.alt = 'Image of greek yogurt';
greekYogurt.id = 'greek-yogurt-image';
home.appendChild(greekYogurt);

const hours = document.createElement('section');
hours.id = 'hours';
const hoursTitle = document.createElement('h2');
hoursTitle.textContent = 'Hours of Operation';
hours.appendChild(hoursTitle);
const hours_container = document.createElement('div');
hours_container.id = 'hours-container';

const days_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hours_text = '8am - 5pm'

for (let day of days_of_week) {
    const day_hours = document.createElement('p');
    day_hours.textContent = `${day}: ${hours_text}`;
    hours_container.appendChild(day_hours);
}
hours.appendChild(hours_container);
home.appendChild(hours);

const location = document.createElement('section');
location.id = 'location';
const locationTitle = document.createElement('h2');
locationTitle.textContent = 'Come Visit Us!';
location.appendChild(locationTitle);
const location_p1 = document.createElement('p');
location_p1.textContent = '1234 Olympus Way, Athens, Greece';
location.appendChild(location_p1);
home.appendChild(location);

const contact = document.createElement('section');
contact.id = 'contact';
const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Us';
contact.appendChild(contactTitle);
const contact_p1 = document.createElement('p');
contact_p1.textContent = 'Phone: 123-456-7890';
contact.appendChild(contact_p1);
const contact_p2 = document.createElement('p');
contact_p2.textContent = 'Email: xxxx @ olympusdelight.com';
contact.appendChild(contact_p2);
home.appendChild(contact);

export { home };