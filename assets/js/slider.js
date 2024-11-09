export default function sliderAutoPlay(
  cardContainer,
  cardItem,
  intervalDuration = 5000
) {
  const sliderContainer = document.querySelector(cardContainer);
  const sliderItems = document.querySelectorAll(cardItem);
  let currentSlide = 0;
  let sliderInterval;

  function startSlider() {
    sliderInterval = setInterval(() => {
      sliderContainer.scrollLeft += sliderItems[currentSlide].offsetWidth;
      currentSlide++;

      if (currentSlide === sliderItems.length) {
        currentSlide = 0;
        sliderContainer.scrollLeft = 0;
      }

      sliderContainer.style.transition = "all 1s ease-in-out";
    }, intervalDuration);
  }

  startSlider();

  sliderContainer.addEventListener("mouseover", () => {
    clearInterval(sliderInterval);
  });
  sliderContainer.addEventListener("touchstart", () => {
    clearInterval(sliderInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    startSlider();
  });

  sliderContainer.addEventListener("click", () => {
    clearInterval(sliderInterval);
  });
}
