function toggleText() {
    var element = document.querySelector('.expandable-text');
    element.classList.toggle('expanded');
    if (element.classList.contains('expanded')) {
      var detailsSpan = document.querySelector('.details');
      detailsSpan.classList.add('typing');
    }
  }

  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  let slideIndex = 0;
  
  prevBtn.addEventListener('click', () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    slideIndex = Math.min(slideIndex + 1, slider.children.length - 1);
    updateSlider();
  });
  
  function updateSlider() {
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }
  

