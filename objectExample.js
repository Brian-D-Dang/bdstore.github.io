var kimchee = {
  "name":"Kim chee",
  "cost": 4,
  "maker": "Brian Dang",
  "proDate":11012017
}

function buyKimchee() {
  var qty = document.getElementById('qty').value;
  var price = qty * kimchee.cost;
  document.getElementById('confirm').innerHTML = kimchee.name;
  localStorage.setItem('firstFood',kimchee.name);
  localStorage.setItem('firstCost',price);
}

function payUp() {
  var subtotal = localStorage.getItem('subtotal');
  var tax = 1.04712;
  var grandtotal = subtotal * tax;
  grandtotal.toFixed(2);
  document.getElementById('receipt').innerHTML = "CASH CASH MONEY" + grandtotal;
}
