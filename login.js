document.getElementById('btn-login').addEventListener('click',function(e){
  e.preventDefault();
  

  const PhoneNumber = document.getElementById('phone-number').value;
  console.log(PhoneNumber);
  const pinNumber = document.getElementById('pin-number').value;
  console.log(pinNumber)

  if(PhoneNumber === '5' && pinNumber === '123'){
    console.log('you are loged in')
    window.location.href = '/home.html';
  }
  else{
    alert('worng phone number')
  }
})