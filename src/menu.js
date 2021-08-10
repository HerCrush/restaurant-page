const dish = (title, image, description) => {
    const div = document.createElement('div');
    const header = document.createElement('h3');
    const picture = document.createElement('img');
    const para = document.createElement('p');

    header.textContent = title;
    picture.src = image;
    para.textContent = description;

    div.append(header, picture, para);
    
    return div;
};

export default function loadMenu() {
    const menuDiv = document.createElement('div');

    menuDiv.append(
        dish('Super Duper Soup', './soup.png', 'Broccoli and mushrooms creamy soup.'),
        dish('Pizza Queen', './pizza.png', 'Roman style 4 cheese pizza (mozzarella, parmigiano, provolone, ricotta) topped with honey.'),
        dish('Sea Risotto', './risotto.png', 'Risotto with squid and mussels.'),
        dish('Chocotorta', './chocotorta', 'Argentinian dessert made with chocolate cookies, cream cheese and dulce de leche.')
    );

    document.querySelector('#content').appendChild(menuDiv);
}