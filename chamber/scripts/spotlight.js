const url = 'https://douglasgreyling.github.io/wdd231/chamber/members.json';

const cards = document.querySelector('#businesses .container');

async function getBusinessData() {
  const response = await fetch(url);
  let data = await response.json();

  data = data.filter((business) => business.membership_level === 2 || business.membership_level === 3);
  data = data.sort(() => Math.random() - 0.5).slice(0, 3);

  displayBusinesses(data);
}

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    let container = document.createElement('div');
    let name = document.createElement('h3');
    let tagline = document.createElement('p');
    let hr = document.createElement('hr');
    let businessInfo = document.createElement('div');
    let img = document.createElement('img');
    let info = document.createElement('div');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');

    container.classList.add('business');
    businessInfo.classList.add('info');

    name.textContent = business.name;
    tagline.textContent = business.tagline;

    img.setAttribute('src', "https://placehold.co/50x50");
    img.setAttribute('alt', `Logo for ${business.name}`);
    img.setAttribute('width', '50');
    img.setAttribute('height', '50');

    email.textContent = `Email: ${business.email}`;
    phone.textContent = `Phone: ${business.phone}`;
    url.textContent = `URL: ${business.website}`;

    container.appendChild(name);
    container.appendChild(tagline);
    container.appendChild(hr);
    container.appendChild(businessInfo);

    businessInfo.appendChild(img);
    businessInfo.appendChild(info);

    info.appendChild(email);
    info.appendChild(phone);
    info.appendChild(url);

    cards.appendChild(container);
  });
}

getBusinessData();