var x="";
function Display(){
var x = document.getElementById('name').value;
var name = localStorage.setItem("UserName", x);
window.alert(x);
}

function DisplayTheSave(){
var z = localStorage.getItem("UserName");
window.alert(z);
}
