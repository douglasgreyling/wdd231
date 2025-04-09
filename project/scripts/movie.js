const movies = [
  {
    id: 1,
    title: 'Some Movie 1',
    director: 'John Doe',
    genre: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
  {
    id: 2,
    title: 'Some Movie 2',
    director: 'Jan Doe',
    genre: 'Comedy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
  {
    id: 3,
    title: 'Some Movie 3',
    director: 'Joon Doe',
    genre: 'Thriller',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
  {
    id: 4,
    title: 'Some Movie 4',
    director: 'John Doe',
    genre: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
  {
    id: 5,
    title: 'Some Movie 5',
    director: 'Joen Doe',
    genre: 'Comedy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
  {
    id: 6,
    title: 'Some Movie 6',
    director: 'Doe John',
    genre: 'Thriller',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur'
  },
];

const element = document.getElementById('movie');

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

const movie = movies.find(movie => movie.id === id);

function markMovieAsWatched() {
  if (!localStorage.getItem(`movie-${id}`)) {
    localStorage.setItem(`movie-${id}`, 'watched');
  } else {
    localStorage.removeItem(`movie-${id}`);
  }

  window.location.reload();
}

if (movie) {
  element.innerHTML = `
    <img src="https://picsum.photos/240/240" alt="${movie.title}" loading="lazy">
    <h2>${movie.title}</h2>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Description:</strong> ${movie.description}</p>
    <button onclick="markMovieAsWatched()" class="button">${localStorage.getItem(`movie-${id}`) ? 'Mark as Unwatched' : 'Mark as Watched'}</button>
  `;
} else {
  element.innerHTML = `<p>Movie not found!</p>`;
}