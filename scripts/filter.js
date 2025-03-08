const filters = document.getElementById('filters');

filters.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const subject = button.getAttribute('data-subject');

    document.querySelectorAll('.course').forEach(course => {
      if (subject === 'all') {
        course.style.display = 'block';
      } else if (course.getAttribute('data-subject') === subject) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });

    const credits = document.getElementById('credits');

    const total = Array.from(document.querySelectorAll('.course')).reduce((total, course) => {
      if (course.style.display !== 'none' && course.classList.contains('completed')) {
        return total + parseInt(course.getAttribute('data-credits'));
      }

      return total;
    }, 0);

    credits.textContent = `(Total Completed Credits: ${total})`;
  });
});
