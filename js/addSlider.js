/*масштаб изображения */
const image = document.querySelector('.img-upload__preview img');
const scaleReduce = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scaleIncrease = document.querySelector('.scale__control--bigger');
let i = 1;
image.style.transform = `scale(${ i })`;
console.log(image.style.transform);
scaleReduce.addEventListener('click', () => {
  if(i >= 0.5){
    i = i - 0.25;
    image.style.transform = `scale(${ i })`;
    console.log(image.style.transform);
    scaleValue.value = `${i * 100 }%`;
    return i;
  }
});
scaleIncrease.addEventListener('click', () => {
  if(i < 1){
    i = i + 0.25;
    image.style.transform = `scale(${ i })`;
    scaleValue.value = `${i * 100 }%`;
    console.log(image.style.transform);
    return i;
  }
});

/* слайдер эффектов */
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
valueElement.value = 1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (...rest) => {
  valueElement.value = sliderElement.noUiSlider.get();
});