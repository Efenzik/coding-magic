import team from '../data/team';

export const teamInit = () => {
  const gameContainer = document.querySelector('.team');

  const gameHtml = `
    <div class="team__container">
      <h2 class="game__title">Наша команда</h2>
      <button class="slider__button left__button"></button>
      <div class="slider">
        <ul class="slider__list">
          ${team
            .map(
              teammate => `
            <li class="slider__item">
              <article class="teammate">
                <div class="teammate__photo">
                  <img class="teammate__img" src="${teammate.teammatePhoto}" alt="${teammate.name}">
                </div>
                <h3 class="teammate__name">${teammate.name}</h3>
                <p class="teammate__role">${teammate.teammateInfo}</p>
              </article>
            </li>`
            )
            .join('')}
        </ul>
      </div>
      <ul class="slider__chooser">
        ${team
          .map(
            i =>
              `<li class="chooser__dot ${
                i === 0 ? 'active' : ''
              }" data-index="${i}"></li>`
          )
          .join('')}
      </ul>
      <button class="slider__button right__button"></button>
    </div>
  `;
  gameContainer.innerHTML = gameHtml;

  const sliderList = gameContainer.querySelector('.slider__list');
  const leftButton = gameContainer.querySelector('.left__button');
  const rightButton = gameContainer.querySelector('.right__button');
  const chooserDots = gameContainer.querySelectorAll('.chooser__dot');

  const totalSlides = team.length;
  let currentSlide = 0;

  const updateSlider = () => {
    sliderList.style.transform = `translateX(-${currentSlide * 100}%)`;
    sliderList.style.transition = 'transform 0.4s ease';

    chooserDots.forEach(dot => dot.classList.remove('active'));
    chooserDots[currentSlide].classList.add('active');
  };

  rightButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;

    updateSlider();
  });
  leftButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    updateSlider();
  });

  chooserDots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentSlide = parseInt(dot.dataset.index, 10);

      updateSlider();
    });
  });
};
