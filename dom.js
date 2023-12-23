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
	// const objJSON=JSON.stringify(my_obj);
//inserting in local storage
	// localStorage.setItem(key,objJSON);
	axios.post('https://crudcrud.com/api/23b998d2db1d493c910d61be1fd896cc/appData',
	my_obj).then((response) => {
		console.log(response.data);
	}).catch((err) => {
		console.log('something went wrong');
	});
	
	//showing on screen
	function show(){
	let li=document.createElement('li');
	
	li.appendChild(document.createTextNode(n+' '));
	li.appendChild(document.createTextNode(p+' '));
	li.appendChild(document.createTextNode(email+' '));
	li.appendChild(document.createTextNode(tfc+' '));
	li.appendChild(document.createTextNode(tf+' '));
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
	//edit button
	let editbtn=document.createElement('button');
	editbtn.className='eBtn';
	let etxt=document.createTextNode('edit');
	editbtn.appendChild(etxt);
	li.appendChild(editbtn);
	editbtn.addEventListener('click',edit);
	function edit(e){
		let li=e.target.parentElement;
			list.removeChild(li);
		let ninput=document.querySelector('#name');
		let einput=document.querySelector('#mail');
		let pinput=document.querySelector('#phone');
		let tfcin=document.querySelector('#tfc');
		let tfin=document.querySelector('#tf');
		ninput.value=n;
		einput.value=email;
		pinput.value=p;
		tfcin.value=tfc;
		tfin.value=tf;
	}

	}


}


