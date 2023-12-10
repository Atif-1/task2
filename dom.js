var form=document.querySelector('#main');

form.addEventListener('submit',onSubmit);
function onSubmit(e){
	e.preventDefault();
let n=document.querySelector('#name').value;
let email=document.querySelector('#mail').value;
let p=document.querySelector('#phone').value;
const my_obj=new Object();
my_obj.name=n;
my_obj.email=email;
my_obj.phone=p;
//adding key
var key=email;
//serializing
	const objJSON=JSON.stringify(my_obj);
//inserting in local storage
	localStorage.setItem(key,objJSON);
	
	//showing on screen
	let li=document.createElement('li');
	let text=document.createTextNode(n+' '+email+' '+p);
	li.appendChild(text);
	list.appendChild(li);
}
