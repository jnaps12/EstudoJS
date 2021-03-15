var inputElement = document.querySelector('#app input'),
btnElement = document.querySelector('#app #btnAdd'),
listElement = document.querySelector('#app ol'),
btnDel = document.querySelector('#app #btnDel'),
btnEdit = document.querySelector('#app #btnEdit');

var txt = [];

function renderElements(){
  listElement.innerHTML = '';
  for(element of txt){
    var elementToPrint = document.createElement('li');
    var printElement = document.createTextNode(element);
    

    elementToPrint.appendChild(printElement);
    listElement.appendChild(elementToPrint);
  }
}

renderElements();

btnElement.onclick = function addElements(){  
  txt.push(inputElement.value); 
  renderElements();
}

btnDel.onclick = function DeletElement(){
  var position = prompt("Por favor digite qual posição quer apagar?");
  if(position == null || position == ""){ 
    alert("User fechou a aba.");
  }else{
    position = parseInt(position);
    var removedItem = txt.splice(position-1,1);
    var txtItemRemoved = "Você removeu o"+removedItem+" na posição"+position;
    renderElements();
    document.getElementById("showModifications").innerHTML = txtItemRemoved;
  }
}

btnEdit.onclick = function editElement(){
  var position = prompt("Por favor digite qual posição quer editar?");
  if(position == null || position == ""){ 
    alert("User fechou a aba.");
  }else{
    position = parseInt(position);
    var newText = prompt("Por favor digite o novo texto"),
    oldText = txt.splice(position-1,1,newText),
    txtItemEdited = "Você alterou "+oldText+" para "+newText+" na posição "+position;
    renderElements();
    document.getElementById("showModifications").innerHTML = txtItemEdited;
  }
}





