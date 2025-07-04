
const colors = [
  { start: '#F24F4F', end: '#FFA895' },
  { start: '#30A357', end: '#75E39A' },
  { start: '#ADB0B0', end: '#E1E1E1' },
  { start: '#F4A764', end: '#FFDEC2' }
];

const swiperContainer = document.querySelector('swiper-container');

if (swiperContainer && swiperContainer.swiper) {
  swiperContainer.swiper.on('slideChange', () => {
    const activeIndex = swiperContainer.swiper.activeIndex;
    const { start, end } = colors[activeIndex % colors.length];
    document.body.style.background = `linear-gradient(105.54deg, ${start} -2.93%, ${end} 72.14%)`;
  });
}
const slides = document.querySelectorAll('swiper-slide');
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const { start, end } = colors[index % colors.length];
    document.body.style.background = `linear-gradient(105.54deg, ${start} -2.93%, ${end} 72.14%)`;
  });
});