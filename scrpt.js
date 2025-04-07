let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

let billInput = document.querySelector("#bill");
billInput.addEventListener("input", recieveBillValue);

function recieveBillValue() {
    bill = billInput.valueAsNumber || 0;
    calculate();
}

let numberOfPeopleInput = document.querySelector("#people");
numberOfPeopleInput.addEventListener("input", recieveNumberOfPeople);

function recieveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber || 0;
    calculate();
}

function recieveTipPercentage(value) {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
    }

    buttonSelected = document.querySelector(`#button-${value}`);
    if (buttonSelected) {
        buttonSelected.classList.add("button-selected");
    }

    tipPercentage = value / 100;

    let customTipInput = document.querySelector("#custom-tip");
    customTipInput.value = "";

    calculate();
}

function recieveCustomTipPercentage() {
    let customTipInput = document.querySelector("#custom-tip");
    tipPercentage = (customTipInput.valueAsNumber || 0) / 100;

    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }

    calculate();
}

function calculate() {
    if (bill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
        let tipAmount = (bill * tipPercentage) / numberOfPeople;
        let totalAmount = (bill / numberOfPeople) + tipAmount;

        document.querySelector("#tip-amount").textContent = `$${tipAmount.toFixed(2)}`;
        document.querySelector("#total-amount").textContent = `$${totalAmount.toFixed(2)}`;
    } else {
        document.querySelector("#tip-amount").textContent = "$0.00";
        document.querySelector("#total-amount").textContent = "$0.00";
    }
}

function reset() {
    bill = 0;
    tipPercentage = 0;
    numberOfPeople = 0;
    buttonSelected = null;

    document.querySelector("#bill").value = "";
    document.querySelector("#people").value = "";
    document.querySelector("#custom-tip").value = "";

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("button-selected"));

    calculate();
}
