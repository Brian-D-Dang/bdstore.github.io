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
   var stringit = JSON.stringify(receipt);
   window.alert(amount + "x" +productCostTotal);
 }
 
 function nextPage() {
   localStorage.setItem('product',receipt);
   location.href = "total.html";
 }
 
 function revealRecipt() {
   var GetTotal = localStorage.getItem('product');
   var Total = receipt.push(GetTotal);
   var ParseIt = JSON.parse(receipt);
   var balance = 0;
   for (i=0; i<receipt.length; i++){
     balance += receipt[i];
   }
   var tax = 1.04712;
   var GRANDTOTAL = balance * tax;
   document.getElementById('Test').innerHTML = "GRANDTOTAL:" + ' ' +GRANDTOTAL.toFixed(2);
   window.alert(GRANDTOTAL.toFixed(2));
 }