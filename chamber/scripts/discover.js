const url = 'https://douglasgreyling.github.io/wdd231/chamber/data/items.json';

const container = document.querySelector('.container');

async function getItemsData() {
  const response = await fetch(url);
  const data = await response.json();

  displayItems(data);
}

const displayItems = (items) => {
  items.forEach((item) => {
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let img = document.createElement('img');
    let figure = document.createElement('figure');
    let address = document.createElement('address');
    let description = document.createElement('p');
    let button = document.createElement('button');

    card.classList.add('card');

    name.textContent = item.name;

    img.setAttribute('src', `./images/${item.image}`);
    img.setAttribute('alt', item.name);
    img.setAttribute('loading', 'lazy');

    figure.appendChild(img);

    address.textContent = item.address;

    description.textContent = item.description;

    button.textContent = 'Learn More';

    card.appendChild(name);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    container.appendChild(card);
  });
}

getItemsData();