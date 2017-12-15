var totals =[];
var foods =[
  {
    "name":"Hot dog",
    "type":"Mystery meat",
    "cost":2
  },{
    "name":"Burger",
    "type":"Meat sandwich",
    "cost": 8.50
  }
  ];
  
  function buyHotDog() {
    var qty = document.getElementById('qtyHotDog').value;
    var proce = qty * foods[0].cost;
    totals.push(price);
    localStorage.setItem('finalSubTotal',totals);
  }