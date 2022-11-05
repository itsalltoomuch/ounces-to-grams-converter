### This is a sample of using HTML + JS file to make simple web page. It provides a tool to convert ounces to grams.

## Briefly introduction: 
Reference: https://www.calculatorful.com/ounces-to-grams 

The Gram, also gramme, symbol “g”, is a unit of mass or weight in the metric system. Originally one gram was defined as equal to the mass of one cubic centimeter of pure water at 4 °C (39.2 °F) or a milliliter of pure water

The ounce, or avoirdupois ounce (abbreviated oz),  is a unit for measuring weight in the United States customary and British imperial systems of measurement.

## [How many grams in an ounce](https://www.calculatorful.com/ounces-to-grams)? 

It’s quite simple to do the conversion from grams to ounces.
```
1 oz = 28.3495 g
```
The formular to calculate grams from ounces
```
grams = ounces × 28.349523
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quarts to Cups Converter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <label for="v" id="variable">Quarts</label>
  <input type="number" id="v"><br><br>

  <button id="btn">Calculate</button>

  <p id="result"></p>
  <script src="app.js"></script>
</body>
</html>
```
2. Create js file to define the function
```
const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let quarts = v; 

btn.addEventListener('click', function() {
  result.textContent = `Cups = ${calculateCups().toFixed(5)}`;
})

function calculateCups() {
  return Number(quarts.value) * 4;
}
```