 var receipt = [];
 var balance = 0;
 var products = [
   {
   "prodO":"Castle Ravenloft",
   "costO":60,
   "prod1":"Temple of Elemental Evil",
   "cost1":60,
   "prod2":"Legend of Drizzt",
   "cost2":60,
   "prod3":"Wrath of Ashardalon",
   "cost3":60,
   "prod4":"Tomb of Annihilation",
   "cost4":60,
   "prod5":"Catan",
   "cost5":50
 }
 ];
 
 function buyProduct() {
   var amount = document.getElementById('quantityOne').value;
   var productCostTotal = amount * products[0].costO;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
  function buyProductTwo() {
   var amount = document.getElementById('quantityTwo').value;
   var productCostTotal = amount * products[0].cost1;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
  function buyProductThree() {
   var amount = document.getElementById('quantityThree').value;
   var productCostTotal = amount * products[0].cost2;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
   function buyProductFour() {
   var amount = document.getElementById('quantityFour').value;
   var productCostTotal = amount * products[0].cost3;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
   function buyProductFive() {
   var amount = document.getElementById('quantityFive').value;
   var productCostTotal = amount * products[0].cost4;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
   function buyProductSix() {
   var amount = document.getElementById('quantitySix').value;
   var productCostTotal = amount * products[0].cost5;
   receipt.push(productCostTotal);
   window.alert(amount + "x" +productCostTotal);
 }
 
 function nextPage() {
   for (i=0; i<receipt.length; i++){
     balance += receipt[i];
   }
    if (balance === 0) {
     window.alert("There are no items in your cart!");
   }
    else {
   localStorage.setItem('product',balance);
   location.href = "total.html";
 }
 }

 
 function revealReceipt() {
   var GetTotal = localStorage.getItem('product');
   var tax = 1.04712;
   var GRANDTOTAL = GetTotal * tax;
   document.getElementById('Test').innerHTML = "GRANDTOTAL:" + ' ' +GRANDTOTAL.toFixed(2);
   window.alert(GRANDTOTAL.toFixed(2));
   var clear = localStorage.clear();
 }