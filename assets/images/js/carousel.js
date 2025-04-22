document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track?.children || []);
    const prevButton = document.querySelector('.carousel__btn--prev');
    const nextButton = document.querySelector('.carousel__btn--next');
  
    if (!track || slides.length === 0 || !prevButton || !nextButton) {
      console.warn('❌ Elementos del carrusel no encontrados');
      return;
    }
  
    let currentIndex = slides.findIndex(slide => slide.classList.contains('is-visible'));
    if (currentIndex === -1) {
      currentIndex = 0;
      slides[0].classList.add('is-visible');
    }
  
    function updateCarousel(newIndex) {
      slides[currentIndex].classList.remove('is-visible');
      slides[newIndex].classList.add('is-visible');
      currentIndex = newIndex;
    }
  
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      updateCarousel(nextIndex);
    });
  
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(prevIndex);
    });
  });
  