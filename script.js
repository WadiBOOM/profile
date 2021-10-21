console.log("Ricardo");
console.log("Wadi");

const element = document.querySelector('.card-white');

element.addEventListener('mouseenters', (event) => {
  console.log(event.currentTarget);
  event.currentTarget.classList.toggle('red');
});
