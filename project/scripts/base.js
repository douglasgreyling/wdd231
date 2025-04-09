const url = 'https://douglasgreyling.github.io/wdd231/project/data/items.json';

const element = document.getElementById('movies');

async function getMovieData() {
  const response = await fetch(url);
  const data = await response.json();

  displayMovies(data);
}

const displayMovies = (movies) => {
  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.innerHTML = `
      <img src="https://picsum.photos/240/240" alt="${movie.title}" loading="lazy">
      <h2>${movie.title}</h2>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <button class="button" onclick="document.getElementById('movie-${movie.id}').showModal()">Learn More</button>
      <dialog id="movie-${movie.id}" class="modal">
        About this movie:
        <p><strong>Description:</strong> ${movie.description}</p>
        <button onclick="this.closest('dialog').close()">Close</button>
      </dialog>
      <a href="./movie.html?id=${movie.id}" class="button">Track</a>
    `;
    element.appendChild(movieElement);
  });
}

getMovieData();
