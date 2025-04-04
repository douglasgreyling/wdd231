const header = document.getElementById('welcome');

const lastVisit = localStorage.getItem('lastVisit');

let text = "Welcome! Let us know if you have any questions."

if (lastVisit) {
  const currentDate = new Date();
  const lastDate = new Date(lastVisit);
  const timeDiff = Math.abs(currentDate - lastDate);
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (diffDays < 1) {
    text = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    text = `You last visited ${diffDays} day ago.`;
  } else {
    text = `You last visited ${diffDays} days ago.`;
  }
}

header.innerText = text;

localStorage.setItem('lastVisit', new Date().toISOString());
