
const para = document.querySelector('p');
para.addEventListener('click,updateName');

function updateName(){
  const name = prompt('enter a name');
  para.textContent = 'player 1 :${name}';
}