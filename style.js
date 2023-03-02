const socialMediaLinks = document.querySelectorAll('.social-media-links a');

socialMediaLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const url = link.getAttribute('href');
    window.open(url, '_blank');
  });
});



