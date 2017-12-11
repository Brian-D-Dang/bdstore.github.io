 var receipt = [];
 var products = [
   {
   "prodO":"Castle Ravenloft",
   "costO":60
 }
 ];
 function buyProduct() {
   var amount = document.getElementById('quantityOne').value;
   var productCostTotal = amount * products[0].costO;
   receipt.push(productCostTotal);
   var STRINGIT = JSON.stringify
   localStorage.setItem('product',receipt);
   var GetTotal = localStorage.getItem('product');
   window.alert(GetTotal);
   
 }
 function totalOfEveryThing() {
   
 }