import { contactPage } from "./modules/contact.js";
import { homePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";
import './style.css';

function initialiazePage(){
const content = document.getElementById('content');
const navbar = document.createElement('div');
navbar.classList.add('navbar');

const homeButton = document.createElement('button')
const contactButton = document.createElement('button')
const menuButton = document.createElement('button')

homeButton.textContent = 'home';
contactButton.textContent = 'contact';
menuButton.textContent = 'menu';


navbar.appendChild(homeButton)
navbar.appendChild(contactButton)
navbar.appendChild(menuButton)
content.appendChild(navbar);

homePage();
}


function handleClick(){
    content.removeChild(content.lastChild)
}

homeButton.addEventListener('click', () => {
    handleClick();
    homePage();
    
})
contactButton.addEventListener('click', () => {
    
    
    handleClick();
    contactPage();
    
})
menuButton.addEventListener('click', () => {
    
    
    handleClick();
    menuPage();
    
})
initialiazePage();







