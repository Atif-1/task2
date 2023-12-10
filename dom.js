var form=document.querySelector('#main');

form.addEventListener('submit',onSubmit);

function onSubmit(e){
let n=document.querySelector('#name').value;
let email=document.querySelector('#mail').value;
let p=document.querySelector('#phone').value;
localStorage.setItem('name',n);
localStorage.setItem('email',email);
localStorage.setItem('phone',p);

 }