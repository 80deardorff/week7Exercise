let wordOne = document.getElementById('unique-1');
let myInput = document.getElementById('myInput');
let wordTwo = document.getElementById('unique-2');

wordOne.textContent = 'Hello World!';

function changeText() {
  let newText = myInput.value;
  wordTwo.textContent = newText;
  myInput.value = '';
}

let myArray = ['string1', 'string2', 'string3', 'string4', 'string5'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
};

let myObject = {
  shape: 'SQUARE',
  size: 'LARGE',
  color: 'RED'
};

document.getElementById('c1').textContent = (myObject.shape);
document.getElementById('c2').textContent = (myObject.size);
document.getElementById('c3').textContent = (myObject.color);

let steak = [
  { type: 'ribeye',
    cook: 'medium rare',
    thickness: '2"'
  },
  { type: 'delmonico',
    cook: 'medium',
    thickness: '1.5"'
  },
  { type: 'flank',
    cook: 'well done',
    thickness: '0.5"'
  }
];

for (let i = 0; i < steak.length; i++) {
  console.log(steak[i].type);
  console.log(steak[i].cook);
  console.log(steak[i].thickness);
};

document.body.style.color = 'red';
