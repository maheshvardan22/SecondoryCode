console.log(document.title);
var Additems = document.getElementsByClassName('title');
console.log(Additems);
console.log(Additems[0]);
Additems[0].textContent = 'ADD ITEM';
Additems[0].style.fontweight = 'bold';
Additems[0].style.color = 'green';

