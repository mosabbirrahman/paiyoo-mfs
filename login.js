document.getElementById('btn-login').addEventListener('click',function(e){
  e.preventDefault();
  console.log('btn clciked')

  const PhoneNumber = document.getElementById('phone-number').value;
  console.log(PhoneNumber);
  const pinNumber = document.getElementById('pin-number').value;
  console.log(pinNumber)
})