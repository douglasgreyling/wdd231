const url = 'file:///Users/douglasgreyling/byu/wdd231/chamber/members.json';

const cards = document.querySelector('#businesses .container');

async function getBusinessData() {
  // const response = await fetch(url);
  // const data = await response.json();

  const data = [
    {
      "name": "GreenLeaf Organic Market",
      "address": "123 Main St, Springfield, IL 62701",
      "phone": "(217) 555-1234",
      "website": "http://www.greenleaforganic.com",
      "membership_level": 3,
      "email": "help@greenleaforganic.com",
    },
    {
      "name": "Tech Haven Solutions",
      "address": "456 Innovation Dr, Austin, TX 78701",
      "phone": "(512) 555-5678",
      "website": "http://www.techhavensolutions.com",
      "membership_level": 2,
      "email": "help@techhavensolutions.com",
    },
    {
      "name": "Bella's Italian Bistro",
      "address": "789 Pasta Ave, San Diego, CA 92101",
      "phone": "(619) 555-8765",
      "website": "http://www.bellasbistro.com",
      "membership_level": 1,
      "email": "help@bellasbistro.com",
    },
    {
      "name": "Summit Financial Advisors",
      "address": "321 Wealth St, Denver, CO 80202",
      "phone": "(303) 555-2468",
      "website": "http://www.summitfinancial.com",
      "membership_level": 3,
      "email": "help@summitfinancial.com",
    },
    {
      "name": "EcoClean Dry Cleaning",
      "address": "654 Fresh Ln, Seattle, WA 98101",
      "phone": "(206) 555-9987",
      "website": "http://www.ecocleandrycleaning.com",
      "membership_level": 2,
      "email": "help@ecocleandrycleaning.com",
    },
    {
      "name": "Sunrise Yoga Studio",
      "address": "987 Zen Rd, Miami, FL 33101",
      "phone": "(305) 555-6543",
      "website": "http://www.sunriseyogamiami.com",
      "membership_level": 1,
      "email": "help@sunriseyogamiami.com",
    },
    {
      "name": "Pinnacle Auto Repair",
      "address": "222 Torque Dr, Phoenix, AZ 85001",
      "phone": "(602) 555-1122",
      "website": "http://www.pinnacleautorepair.com",
      "membership_level": 3,
      "email": "help@pinnacleautorepair.com",
    }
  ]

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