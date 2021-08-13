export default function loadContact() {
    const contactDiv = document.createElement('div');

    const resDiv = document.createElement('div');
    const resHeader = document.createElement('h3');
    const resPhone = document.createElement('p');
    const resEmail = document.createElement('p');

    resDiv.classList.add('contact_div');
    resDiv.id = 'reserv';
    resHeader.textContent = 'Reservations';
    resPhone.textContent = 'Phone: 123-444-5678';
    resEmail.textContent = 'E-mail: reservations@restaurant.com';

    resDiv.append(resHeader, resPhone, resEmail);
    contactDiv.appendChild(resDiv);

    const busDiv = document.createElement('div');
    const busHeader = document.createElement('h3');
    const busPhone = document.createElement('p');
    const busEmail = document.createElement('p');

    busDiv.classList.add('contact_div');
    busDiv.id = 'busin';
    busHeader.textContent = 'Business';
    busPhone.textContent = 'Phone: 987-555-4321';
    busEmail.textContent = 'E-mail: business@restaurant.com';

    busDiv.append(busHeader, busPhone, busEmail);
    contactDiv.appendChild(busDiv);

    const socDiv = document.createElement('div');
    const socHeader = document.createElement('h3');
    const instaDiv = document.createElement('div');
    const instaIcon = document.createElement('img');
    const socInsta = document.createElement('a');
    const faceDiv = document.createElement('div');
    const faceIcon = document.createElement('img');
    const socFace = document.createElement('a');

    socDiv.classList.add('contact_div');
    socDiv.id = 'social';
    socHeader.textContent = 'Social';
    instaIcon.src = 'instagram-icon.png';
    socInsta.textContent = 'https://www.instagram.com/restaurant/';
    socInsta.href = 'https://www.instagram.com/restaurant/';
    faceIcon.src = 'facebook-icon.png';
    socFace.textContent = 'https://www.facebook.com/restaurant/';
    socFace.href = 'https://www.facebook.com/restaurant/';

    instaDiv.append(instaIcon, socInsta);
    faceDiv.append(faceIcon, socFace);
    socDiv.append(socHeader, instaDiv, faceDiv);
    contactDiv.appendChild(socDiv);

    document.querySelector('#content').appendChild(contactDiv);
}