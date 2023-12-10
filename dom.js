var form=document.querySelector('#main');
var list=document.querySelector('#list');

function onSubmit(e){
	e.preventDefault();
let n=document.querySelector('#name').value;
let email=document.querySelector('#mail').value;
let p=document.querySelector('#phone').value;
let tfc=document.querySelector('#tfc').value;
let tf=document.querySelector('#tf').value;
const my_obj=new Object();
my_obj.name=n;
my_obj.email=email;
my_obj.phone=p;
my_obj.dateForCall=tfc;
my_obj.timeForCall=tf;
//adding key
var key=email;
//serializing
	const objJSON=JSON.stringify(my_obj);
//inserting in local storage
	localStorage.setItem(key,objJSON);
	
	//showing on screen
	let li=document.createElement('li');
	li.appendChild(document.createTextNode(n));
	li.appendChild(document.createTextNode(email));
	li.appendChild(document.createTextNode(p));
	li.appendChild(document.createTextNode(tfc));
	li.appendChild(document.createTextNode(tf));
	list.appendChild(li);
	//creating delete button
	var delbtn=document.createElement('button');
	delbtn.className='delete';
	delbtn.appendChild(document.createTextNode('Delete'));
	li.appendChild(delbtn);
	//add event on delete button
	delbtn.addEventListener('click',del);

	function del(e){
		e.preventDefault();
		if(confirm('Remove this appointment?')){
			let li=e.target.parentElement;
			//remove data from list
			list.removeChild(li);
			//remove data from local storage
			localStorage.removeItem(key);
		}
	}
}


