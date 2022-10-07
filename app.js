function getInputValueById(id) {
  const inputField = document.getElementById(id + "-field");
  const inputText = inputField.value;
  // inputField.value = "";
  let inputAmount = 0;
  if (isNaN(inputText)) {
    alert("Please enter a number");
    return inputAmount;
  } else if (parseInt(inputText) < 0) {
    alert("Please enter positive number");
    return inputAmount;
  } else {
    return (inputAmount = parseInt(inputText));
  }
}

function setElementText(id, amount) {
  const totalExpenses = document.getElementById(id);
  totalExpenses.innerText = amount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = getInputValueById("income");
  const foodAmount = getInputValueById("food");
  const rentAmount = getInputValueById("rent");
  const clothesAmount = getInputValueById("clothes");

  if ((incomeAmount, foodAmount, rentAmount, clothesAmount)) {
    const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
    setElementText("expe-total", totalExpensesAmount);

    const balance = incomeAmount - totalExpensesAmount;
    setElementText("balance", balance);
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const savePercentage = getInputValueById("save");

  const incomeAmount = getInputValueById("income");
  const savingAmount = (savePercentage / 100) * incomeAmount;
  setElementText("saving-amount", savingAmount);

  const balanceElement = document.getElementById("balance").innerText;
  const balanceAmount = parseInt(balanceElement);

  const remainingBalance = balanceAmount - savingAmount;
  setElementText("remaining-balance", remainingBalance);
});
