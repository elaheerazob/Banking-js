function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId);
    const amountText = inputFild.value;
    const amountTotal = parseFloat(amountText);
    //clear input Fild
    inputFild.value = '';
    return amountTotal;
}

function updateTotalFild(totalFild,amount) {
    const totalElement = document.getElementById(totalFild);
    const totalText = totalElement.innerText;
    const previestotal = parseFloat(totalText);
    totalElement.innerText = previestotal + amount;
}

function getCurrentBlance(){
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previesblanceTotal = parseFloat(balanceTotalText);
    return previesblanceTotal;
}

function updateBlance(depositAmount,isadd){
    const balanceTotal = document.getElementById('blance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previesblanceTotal = parseFloat(balanceTotalText); */
    const previesblanceTotal = getCurrentBlance();
    if(isadd == true){
        balanceTotal.innerText = previesblanceTotal + depositAmount;
    }else{
        balanceTotal.innerText = previesblanceTotal - depositAmount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput =document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount =parseFloat(depositAmountText);
    


    //get curret deposit
    /* const depositTotal =document.getElementById('deposit-Total');
    const depositTotalText =depositTotal.innerText;
    const previesdepositTotal =parseFloat(depositTotalText);
    depositTotal.innerText=depositAmount + previesdepositTotal; */
    

    //Update blance
    /* const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previesblanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previesblanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalFild('deposit-Total', depositAmount)
        updateBlance(depositAmount,true)
    }

})

// get Withdrow
document.getElementById('withdrow-button').addEventListener('click', function () {
    /* const withdowInput=document.getElementById('withdow-input');
    const withdowAmountText = withdowInput.value;
    const withdowAmount = parseFloat(withdowAmountText); */
    


    // update Withdrow total 
    /* const withdowTotal = document.getElementById('withdrow-total');
    const withdowTotalText =withdowTotal.innerText;
    const previeswithdowTotal = parseFloat(withdowTotalText);
    withdowTotal.innerText = previeswithdowTotal + withdowAmount; */
    




    // update balance after withdrow
    /* const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previesblanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previesblanceTotal - withdowAmount; */
    const withdowAmount = getInputValue('withdow-input')
    const currentBlance = getCurrentBlance();
    if(withdowAmount > 0 && withdowAmount < currentBlance){
        updateTotalFild('withdrow-total', withdowAmount)
        updateBlance(withdowAmount,false)
    }
    if(withdowAmount > currentBlance){
        alert('Your Blance Low')
    }

})