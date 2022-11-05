
const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let ounces = v; 

btn.addEventListener('click', function() {
  result.textContent = `Grams = ${calculateGrams().toFixed(5)}`;
})

function calculateGrams() {
  return Number(ounces.value) * 28.349523;
}