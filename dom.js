//selecting the fields for events
form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');

//sumbitting item
form.addEventListener('submit', addItem);
// Deleting item
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  let newItem = document.querySelector('#item').value;

  // Create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';
  let liVal=document.createTextNode(newItem);
  li.appendChild(liVal);

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
