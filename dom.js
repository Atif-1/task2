var form=document.querySelector('#main');

form.addEventListener('submit',onSubmit);
function onSubmit(e){
	e.preventDefault();
// let n=document.querySelector('#name').value;
// let email=document.querySelector('#mail').value;
// let p=document.querySelector('#phone').value;
const my_obj=new Object();
my_obj.name=document.querySelector('#name').value;
my_obj.email=document.querySelector('#mail').value;
my_obj.phone=document.querySelector('#phone').value;
	const objJSON=JSON.stringify(my_obj);
	localStorage.setItem(serial,objJSON);
	
}
