let list = [];

function getTotal(list){
  let total = 0;
  for(var key in list){ //vale notar o key = valor na list = lista que se executada, basta prestar atenção embaixo.
    total += list[key].value * list[key].quantidade;
  }
  document.getElementById("totalValor").innerHTML = formatValue(total);
  return total;
}

function setList(list){
  let table = '<thead class="thead-light"><tr><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Value</th><th scope="col">Action</th></tr></thead><tbody>';
  for(let key in list){
    table += '<tr><th>' + formatDesc(list[key].desc) + '</th><td>' + formatAmount(list[key].quantidade) + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-info" onclick="setUpdate('+ key +')">Edit</button> | <button class="btn btn-danger" onclick="deleteData('+ key +')">Delete</button></td></tr>';
  }
  table += '</tbody>';
  getTotal(list);
  saveListStorage(list);
  document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc){
  let str = desc.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

function formatValue(value){
  let price = parseFloat(value).toFixed(2) + "";
  price = price.replace('.', ',');
  price = 'R$ ' + price;
  return price;
}

function formatAmount(quantidade){
  return parseInt(quantidade);
}

function addData(){
  if (!validation()) {
    return;
  }
  let desc = document.getElementById("desc").value;
  let quantidade = document.getElementById("quantidade").value;
  let value = document.getElementById("value").value;

  list.unshift({"desc" : desc, "quantidade": quantidade, "value": value});
  setList(list);
}

function setUpdate(id){
  let obj = list[id];
  document.getElementById('desc').value = obj.desc;
  document.getElementById('quantidade').value = obj.quantidade;
  document.getElementById('value').value = obj.value;
  document.getElementById('btnUpdate').style.display = "inline-block";
  document.getElementById('btnAdd').style.display = "none";

  document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" id="idUpdate" value="'+ id +'"/>';
  // document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" id="idUpdate" value="{{id}}"/>';
}

function resetForm(){
  document.getElementById('desc').value = "";
  document.getElementById('quantidade').value = "";
  document.getElementById('value').value = "";
  document.getElementById('btnUpdate').style.display = "none";
  document.getElementById('btnAdd').style.display = "inline-block";
  document.getElementById('inputIdUpdate').innerHTML = "";
}

function updateData(){
  if(!validation()){
    return;
  }
  let id = document.getElementById('idUpdate').value;

  let desc = document.getElementById('desc').value;
  let quantidade = document.getElementById('quantidade').value;
  let value = document.getElementById('value').value;

  list[id] = {
    'desc': desc,
    'quantidade': quantidade,
    'value': value,
  }
  resetForm();
  setList(list);

}

function deleteData(id){
  if(confirm("Deletar este item?")){
    // if(id === list.length - 1){
    //   list.pop();
    // }else if(id === 0){
    //   list.shift();
    // }else{
    // }
    list.splice(id, 1);
    setList(list);
  }
}

function validation(){
  var desc = document.getElementById('desc').value;
  var quantidade = document.getElementById('quantidade').value;
  var value = document.getElementById('value').value;
  var errors = "";
  document.getElementById("errors").style.display = "none";
  if(desc === ""){
    errors += "<p>Campo Descrição Vazio, por favor preencha!</p>";
  }

  if(quantidade === ""){
    errors += "<p>Campo Quantidade Vazio, por favor preencha!</p>";
  }else if(quantidade != parseInt(quantidade)){
    errors += "<p>Dado inválido no campo quantidade</p>";
  }

  if (value === "") {
    errors += "<p>Campo Valor Vazio, por favor preencha!</p>";
  } else if (value != parseFloat(value)) {
    errors += "<p>Dado inválido no campo valor</p>";
  }

  if (errors != ""){
    document.getElementById('errors').style.display = "block";
    document.getElementById('errors').innerHTML = "<h3>Error: </h3>" + errors;
    return 0;
  }else{
    return 1;
  }
}

function deleteList(){
  if(confirm("Deletar lista??")){
    list = [];
    setList(list);    
  }
}

function saveListStorage(list){
  let jsonStr = JSON.stringify(list);
  localStorage.setItem("list", jsonStr);
}

function initListStorage(){
  let testList = localStorage.getItem("list");
  if(testList){
    list = JSON.parse(testList);
  }
  setList(list);
}


initListStorage();