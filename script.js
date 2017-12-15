var Names= [
  ''
  ];
function Display(){
var x = document.getElementById('name').value;
Names.push(x);
var name = localStorage.setItem("UserName", x);
location.href="two.html";
}

function DisplayTheSave(){
var z = localStorage.getItem("UserName");
window.alert(z);
var yz = document.getElementById('hey').innerHTML=Names.length;
}
