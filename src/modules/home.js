export function homePage(){
    const content = document.getElementById('content');

    const body = document.createElement('div');
    const container = document.createElement('div');
    const header = document.createElement('h1');
    const about = document.createElement('p');
    const image = document.createElement('img');
    
    container.classList.add('container');
    header.textContent = "Welcome to kebap place";
    about.textContent = "Making kebaps since 2000";    
    image.src = "../src/img/mochi.png";
    
    container.appendChild(header);
    container.appendChild(about);
    container.appendChild(image);

    body.appendChild(container);
    content.appendChild(body);
    return body;
}




