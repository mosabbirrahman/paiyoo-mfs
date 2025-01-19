document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault();
    const amountNumber = document.getElementById('amount-number').value;
    console.log(amountNumber);
    const pinNumber = document.getElementById('pin-Number').value;
    console.log(pinNumber);

if(pinNumber === '123'){

    const balance = document.getElementById('main-balance').innerText;
    console.log(balance)

    const addMoney = parseFloat(amountNumber);
    const mainBalance = parseFloat(balance);
    const newBalance = addMoney + mainBalance;
    console.log(newBalance);
    document.getElementById('main-balance').innerText = newBalance;
}
else{
    alert('faild pass')
}
    
})





const handlecashInOut = (e)=>{
    const balanceStr = document.getElementById('main-balance');
    const balance = parseFloat(balanceStr.innerText);

    if(e){
        const newBalance = balance + 100;
        balanceStr.innerText = newBalance;
    }else{
        const newBalance = balance - 100;
        balanceStr.innerText = newBalance;
    }

    
} 