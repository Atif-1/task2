// document.title='123';
// console.log(document.body);
// console.log(document.links);
// console.log(document.all);
// console.log(document.forms);
document.title='Items lister';
var header=document.getElementById('header-title');
header.innerText='Items Lister';

var items=document.getElementsByClassName('list-group-item');
items[1].innerText='Pizza';
for(let i=0;i<items.length;i++){
	items[i].style.background='grey';
	items[i].style.color='white';

}

var bg=document.getElementById('main-header');
bg.style.borderBottom='3px solid black';

var txt=document.getElementsByClassName('title');
// console.log(txt);
txt[0].style.fontWeight='bold';
txt[0].style.color='green';