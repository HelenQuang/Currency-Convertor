const amountBox = document.querySelector(".amount-box");
const currencyFrom = document.querySelector(".currency-from");
const currencyTo = document.querySelector(".currency-to");
const rateEl = document.querySelector(".rate");
const switchButton = document.querySelector(".btn");
const resultBox = document.querySelector(".result-box");

function calculate() {
  const currFrom = currencyFrom.value;
  const currTo = currencyTo.value;

  //Fetch API
  fetch(`https://api.exchangerate-api.com/v4/latest/${currFrom}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currTo];

      rateEl.innerHTML = `1 ${currFrom} = ${rate} ${currTo}`;

      resultBox.innerHTML = (amountBox.value * rate).toFixed(2);
    });
}

//Add event listener
amountBox.addEventListener("input", calculate);
currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);
switchButton.addEventListener("click", () => {
  [currencyFrom.value, currencyTo.value] = [
    currencyTo.value,
    currencyFrom.value,
  ];
  calculate();
});
