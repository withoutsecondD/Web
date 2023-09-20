let moneyInput = document.getElementById("money");
let currencySelect = document.getElementById("currency");
let KZTResult = document.getElementById("moneyInKZT");
let USDResult = document.getElementById("moneyInUSD");
let EURResult = document.getElementById("moneyInEUR");

let USDSellRate = 431;
let USDBuyRate = 429;
let EURSellRate = 509;
let EURBuyRate = 507;

function exchange() {
    switch (currencySelect.value) {
        case "KZT":
            KZTResult.innerHTML = "-";
            USDResult.innerHTML = (parseInt(moneyInput.value) / 431).toFixed(2).toString();
            EURResult.innerHTML = (parseInt(moneyInput.value) / 509).toFixed(2).toString();
            break;
        case "USD":
            KZTResult.innerHTML = (parseInt(moneyInput.value) * 429).toFixed(2).toString();
            USDResult.innerHTML = "-";
            EURResult.innerHTML = (parseInt(moneyInput.value) * 429 / 509).toFixed(2).toString();
            break;
        case "EUR":
            KZTResult.innerHTML = (parseInt(moneyInput.value) * 507).toFixed(2).toString();
            USDResult.innerHTML = (parseInt(moneyInput.value) * 507 / 431).toFixed(2).toString();
            EURResult.innerHTML = "-";
            break;
    }
}

moneyInput.onblur = exchange;
currencySelect.onchange = exchange;