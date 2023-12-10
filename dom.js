//selecting the fields for events
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter=document.querySelector('#filter');

//sumbitting item
form.addEventListener('submit', addItem);
// Deleting item
itemList.addEventListener('click', removeItem);
//event for searching item
filter.addEventListener('keyup',searchIt);

// Add item
function addItem(e){
  e.preventDefault();
  // Get input value
  let newItem = document.querySelector('#item').value;
  let itemDes=document.querySelector('#des').value;
  // Create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';
  let liVal=document.createTextNode(newItem);
  let liDes=document.createTextNode(itemDes);
  let newDiv=document.createElement('div');
  newDiv.appendChild(liDes);
  li.appendChild(liVal);
  li.appendChild(newDiv);
  // Create del btn 
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  //create edit btn
  let editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('edit'));
  editBtn.className = 'btn btn-sm float-right';
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Remove this Item?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//adding edit button
let li=document.getElementsByClassName('list-group-item');
for(let i=0;i<li.length;i++){
let editBtn = document.createElement('button');
editBtn.appendChild(document.createTextNode('edit'));
editBtn.className = 'btn btn-sm float-right';
li[i].appendChild(editBtn);
}

//search item
function searchIt(e){
  //get the input and convert it into lower case
  let text=e.target.value.toLowerCase();
  //get the items of list
  let itm=itemList.getElementsByTagName('li');//this will give html collection
  //convert the html collection into array
  Array.from(itm).forEach(function(item){
    let itemText=item.firstChild.textContent;
    let des=item.firstElementChild.textContent;
    if(itemText.toLowerCase().indexOf(text)!=-1 || des.toLowerCase().indexOf(text)!=-1 ){
      item.style.display='block';
    }
    else{
      item.style.display='none';
    }
  });

}