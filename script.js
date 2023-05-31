// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
    
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Here, you can add your own logic to handle form submission
    // For example, you can use AJAX to send the form data to a server
    // and display a success message to the user.
  });
  
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let slideIndex = 0;
  
  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }
  
  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slider.children.length - 1;
    }
    showSlide(slideIndex);
  }
  
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  setInterval(nextSlide, 5000);
  