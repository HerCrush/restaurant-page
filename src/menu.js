const dish = (name, title, description) => {
    const div = document.createElement('div');
    const header = document.createElement('h3');
    const picture = document.createElement('img');
    const para = document.createElement('p');

    header.textContent = title;
    picture.src = `./${name}.png`;
    picture.id = name;
    para.textContent = description;

    div.append(header, picture, para);
    
    return div;
};

export default function loadMenu() {
    const menuDiv = document.createElement('div');

    menuDiv.append(
        dish('soup', 'Super Duper Soup', 'Broccoli and mushrooms creamy soup.'),
        dish('pizza', 'Pizza Queen', 'Roman style 4 cheese pizza (mozzarella, parmigiano, provolone, ricotta) topped with honey.'),
        dish('risotto', 'Sea Risotto', 'Risotto with squid and mussels.'),
        dish('chocotorta', 'Chocotorta', 'Argentinian dessert made with chocolate cookies, cream cheese and dulce de leche.')
    );

    document.querySelector('#content').appendChild(menuDiv);
}