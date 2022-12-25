export function contactPage(){
    const content = document.getElementById('content');

    const body = document.createElement('div');
    const container = document.createElement('div');
    const header = document.createElement('h1');
    const contactNumber = document.createElement('p');
    const image = document.createElement('img');
    
    container.classList.add('container');
    header.textContent = "Kebap place";
    contactNumber.textContent = "Call us 1234567";
    image.src = "../src/img/donut.jpg";
    
    
    container.appendChild(header);
    container.appendChild(contactNumber);
    container.appendChild(image);
    body.appendChild(container);
    content.appendChild(body);
    return body;
}