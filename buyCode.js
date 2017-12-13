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
   var STRINGIT = JSON.stringify(receipt);
   var ParseIt = JSON.parse(STRINGIT);
   localStorage.setItem('product',ParseIt);
   var GetTotal = localStorage.getItem('product');
   window.alert(GetTotal);
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
 //check back later today because this is very very hard
    for(i = 0;i<ParseIt;i++){
   var newItem = document.createElement('li');
   var Items = document.createTextNode(GetTotal[i]);
   newItem.appendChild(Items);
   var TotalReceipt = document.getElementsByTagName('ul')[0];
   TotalReceipt.appendChild(newItem);
   }
   window.alert(GetTotal[2]);
   var clearGetTotal = localStorage.clear();