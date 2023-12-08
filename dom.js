// // document.title='123';
// // console.log(document.body);
// // console.log(document.links);
// // console.log(document.all);
// // console.log(document.forms);
// document.title='Items lister';
// var header=document.getElementById('header-title');
// header.innerText='Items Lister';

// var items=document.getElementsByClassName('list-group-item');
// items[1].innerText='Pizza';
// for(let i=0;i<items.length;i++){
// 	items[i].style.background='#f0f0f0';
// 	items[i].style.color='cyan';
// 	items[i].style.fontWeight='bold';
// }


// var li=document.getElementsByTagName('li');
// li[4].style.background='red';


// var bg=document.getElementById('main-header');
// bg.style.borderBottom='3px solid black';

// var txt=document.getElementsByClassName('title');
// // console.log(txt);
// txt[0].style.fontWeight='bold';
// txt[0].style.color='green';

// items[2].style.background='green';

//		<--TASK 6-->


// let secItem=document.querySelector('.list-group-item:nth-child(2)');
// secItem.style.background='green';

// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color=white;


let secondItem=document.querySelectorAll('li');
secondItem[1].style.color='green';


let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
	odd[i].style.background='green';
}

