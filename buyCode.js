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
   receipt.push(amount + "x" +productCostTotal);
   localStorage.setItem('product',receipt);
   var GetTotal = localStorage.getItem('product');
   var stringit = JSON.stringify(receipt);
   document.getElementById('test').innerHTML = receipt;
 }
 
 function nextPage() {
   location.href = "total.html";
 }
 
 function revealRecipt() {
   var GetTotal = localStorage.getItem('product');
   var STRINGIT = JSON.stringify(GetTotal);
   var ParseIt = JSON.parse(STRINGIT);
   document.getElementById('Test').innerHTML = GetTotal;
   window.alert(GetTotal);
 }
