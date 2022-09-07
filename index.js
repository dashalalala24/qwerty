const toggleButton = document.querySelector('.toggle');
const toggleLayer2 = document.querySelector('.layer2');
const toggleMoon = document.querySelector('.moon');
const toggleRisingStar = document.querySelector('.rising-star');
const toggleSun = document.querySelector('.sun');
const toggleCloud1 = document.querySelector('.cloud1');
const toggleCloud2 = document.querySelector('.cloud2');
const toggleCloud3 = document.querySelector('.cloud3');
const toggleCloud4 = document.querySelector('.cloud4');


toggleButton.addEventListener('click', () => {
  console.log('123')

  toggleLayer2.classList.toggle('layer2_light-mode');

  toggleMoon.classList.toggle('moon_light-mode');

  toggleRisingStar.classList.toggle('rising-star_light-mode');

  toggleSun.classList.toggle('sun_light-mode');

  toggleCloud1.classList.toggle('cloud1_light-mode');

  toggleCloud2.classList.toggle('cloud2_light-mode');

  toggleCloud3.classList.toggle('cloud3_light-mode');

  toggleCloud4.classList.toggle('cloud4_light-mode');
});