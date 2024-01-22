const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dollarToday = 4.87
    const euroToday = 5.32
    const bitcoinToday = 0.0000048

    console.log(currencySelect.value)

    const convertedValue = inputCurrencyValue / dollarToday
    
    const currencyValueToConvert = document.querySelector(".currency-value-real")
    const currencyValueConverted = document.querySelector(".currency-value")

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits:2 ,
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        }).format(inputCurrencyValue * bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertedValue)
}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar"){
currencyName.innerHTML = "Dolar Americano"
currencyImage.src = "./assets/estados-unidos (1) 1.png"

}


if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    }


if (currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin",
    currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)