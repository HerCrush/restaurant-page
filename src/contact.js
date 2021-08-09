const contactCard = (header, position, phone, email) => {    //THIS IS ALL WRONG!!!!
    const card = createElement('div');
    const dataList = document.createElement('ul');
    const dataHeader = document.createElement('h3');
    const phoneLi = document.createElement('li');
    const emailLi = document.createElement('li');
    
    card.classList.add('card');
    dataHeader.textContent = header;
    phoneLi.textContent = phone;
    emailLi.textContent = email;

    dataList.append(positionLi, phoneLi, emailLi);
    card.append(nameHeader, dataList);
    document.querySelector('#content').appendChild(card);
}

export default function loadMenu() {

}