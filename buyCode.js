 var receipt = [];
 var products = [
   {
   "prodO":"Castle Ravenloft",
   "costO":60
 }
 ];
 function buyProduct(){
   var amount = document.getElementById('quantityOne').value;
   var productCostTotal = amount * products[0].costO;
   window.alert(productCostTotal);
   
 }