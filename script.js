window.onload = () => {
  
  const min = document.querySelector('.min');
  const max = document.querySelector('.max');
  const button = document.querySelector('.generate');
  button.addEventListener('click', () => {
    if (min.value && max.value) {
      const minValue = Number(min.value);
      const maxValue = Number(max.value);
      const result = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
      const number = document.querySelector('.number');
      number.textContent = result;
    }
  });
  
}