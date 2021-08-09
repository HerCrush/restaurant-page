export default function loadHome() {
    const header1 = document.createElement('h1');
    const header2 = document.createElement('h2');
    const image = document.createElement('img');
    const para1 = document.createElement('p');
    
    header1.textContent = 'Super cool restaurant';
    header2.textContent = 'Come eat here pls';
    image.setAttribute('src', "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg");
    para1.textContent = "We've got lots of food come eat it, it's so good I promise";
    
    document.querySelector('#content').append(header1, header2, image, para1);
}





//         <h1>Super cool restaurant</h1>
//         <h2>Come eat here pls</h2>
//         <image src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg"></image>
//         <p>We've got lots of food come eat it, it's so good I promise</p>