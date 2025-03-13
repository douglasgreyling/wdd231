const gridControl = document.getElementById('grid');
const listControl = document.getElementById('list');

const container = document.querySelector('#businesses .container');

gridControl.addEventListener('click', () => {
  gridControl.classList.add('active');
  listControl.classList.remove('active');

  container.classList.remove('list');
  container.classList.add('grid');
});

listControl.addEventListener('click', () => {
  listControl.classList.add('active');
  gridControl.classList.remove('active');

  container.classList.remove('grid');
  container.classList.add('list');
});
