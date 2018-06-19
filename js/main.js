let wordOne = document.getElementById('unique-1');
let myInput = document.getElementById('myInput')
let wordTwo = document.getElementById('unique-2')

wordOne.textContent = 'Hello World!';

function changeText() {
  let newText = myInput.value;
  wordTwo.textContent = newText;
  myInput.value = '';
}
