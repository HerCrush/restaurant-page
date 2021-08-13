export default function loadHome() {
    const homeDiv = document.createElement('div');

    const header2 = document.createElement('h2');
    const image = document.createElement('img');
    const para1 = document.createElement('p');

    homeDiv.id = 'home';
    header2.textContent = 'Come eat here pls';
    image.setAttribute('src', "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg");
    para1.textContent = "We've got lots of food come eat it, it's so good I promise";
    
    homeDiv.append(header2, image, para1);
    
    document.querySelector('#content').appendChild(homeDiv);
}