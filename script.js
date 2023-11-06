
const readMoreContainers = document.querySelectorAll('.read-more-container');

readMoreContainers.forEach(container => {
  const readMoreBtn = container.querySelector('.read-more-btn');
  const readMoreText = container.querySelector('.read-more-text');

  readMoreBtn.addEventListener('click', () => {
    if (readMoreText.style.display === 'none' || readMoreText.style.display === '') {
      readMoreText.style.display = 'block';
      readMoreBtn.textContent = 'Read Less...';
    } else {
      readMoreText.style.display = 'none';
      readMoreBtn.textContent = 'Read More...';
    }
  });
});




