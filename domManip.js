let temp=document.querySelector('header .container');
//parentNode
temp.parentNode.style.border='5px solid yellow';
 //lastElementChild
 temp.lastElementChild.innerText='New Item Lister';
//lastchild
console.log(temp.lastChild);
// firstelementchild
console.log(temp.firstElementChild);
temp.firstElementChild.style.color='red';

// firstchild
console.log(temp.firstChild);
// nextsibling
let test=document.querySelector('#main-header');
console.log(test.nextSibling);
// nextelementsibling
test.nextElementSibling.style.background='cyan';
// previoussibling
// console.log(test.previousSibling);
// previouselementsibling
// test.previousElementSibling.style.color='coral';
// createelement
let newDiv=document.createElement('div');
// setAttribute
newDiv.setAttribute('title','HEllo');
// createtesxtnode
let newDivText=document.createTextNode('HEllo');
// appendchild
newDiv.appendChild(newDivText);

//adding HEllo text before item lister

let position=document.querySelector('header h1');
temp.insertBefore(newDiv,position);

let place=document.querySelector('#items');
let newElem=document.createElement('li');
let newELemText=document.createTextNode('HEllo');
newElem.className='list-group-item';
newElem.appendChild(newELemText);
let list=document.querySelectorAll('.list-group-item');
place.insertBefore(newElem,list[0]);
