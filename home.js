document.getElementById('add-money').addEventListener('click', function(e){
 e.preventDefault();
 const amountNumber = document.getElementById('amount-number').value;
 console.log(amountNumber);
 const pinNumber = document.getElementById('pin-number').value;
 console.log(pinNumber);
})