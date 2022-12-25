export function menuPage(){
    const content = document.getElementById('content');

    const body = document.createElement('div');
    const container = document.createElement('div');
    const header = document.createElement('h1');
    const menu = document.createElement('ul');

    container.classList.add('container');
    header.textContent = "Today's menu is";

    let menuItems = ['kebap','lahmacun','pilav','dolma'];
    for (let i = 0; i < menuItems.length; i++) {
        const item = document.createElement('li');
        item.textContent = menuItems[i];
        
        menu.appendChild(item);
        
        
    }    
    container.appendChild(header);
    container.appendChild(menu);
    body.appendChild(container);
    content.appendChild(body);
    return body;
}