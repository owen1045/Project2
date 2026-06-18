const principlebox = document.getElementById("principle");
const ratebox = document.getElementById("yearlyRate");
const yearsbox = document.getElementById("lengthOfMortgage");

const calculate = function(){
    const principle = principlebox.value;
    const rate = ratebox.value;
    const years = yearsbox.value;
    const noPayment = "";
    console.log(principle);
    console.log(rate);
    console.log(years);

    if(principle == "" || rate == ""){
        console.log("Bye")
        paymentspan.textContent = noPayment;
        return;
    }
    else if(principle < 0 || rate < 0){
        console.log("Bye")
        paymentspan.textContent = noPayment;
        return;
    }
    
    const decimalRate = rate / 1200;
    const months = years * 12;
    const payment = (principle * decimalRate) / (1 - (1 + decimalRate) ** -months);
    const paymentAmount = "$" + payment.toFixed(2);
    paymentspan.textContent = paymentAmount;
}

principlebox.addEventListener("input", calculate);
ratebox.addEventListener("input", calculate);
yearsbox.addEventListener("input", calculate);