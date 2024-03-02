const itemPrices = {
  "Bel-Aqua(Small)": 19,
  "Bel-Aqua(Medium)": 22,
  "Slemfit": 18,
  "Bel-Cola": 34,
  "Bel-Active": 31,
  "Rush": 36,
  "Storm(Big)": 58,
  "Squeeze": 31,
  "U-Fresh": 30,
  "U-Fresh(Box)": 54,
  "Portello": 31
};

const selectElement = document.getElementById('selectID');
const priceDisplay = document.getElementById('priceDisplay');
const orderedQuantity = document.getElementById('quantityInput');
const amountPaid = document.getElementById('amountPaidInput');
const priceTotal = document.getElementById('totalPrice');
const balanceOutput = document.getElementById('balanceOutput');

function displayPrice() {
  const selectedItem = selectElement.value;
  if (itemPrices[selectedItem]) {
    const itemPrice = itemPrices[selectedItem];
    priceDisplay.textContent = `GH₵${itemPrice.toFixed(2)}`;
    calculateTotal();
  } else {
    priceDisplay.textContent = 'Price not available';
  }
}

function calculateTotal() {
  const selectedItem = selectElement.value;
  const quantity = orderedQuantity.valueAsNumber;
  const itemPrice = itemPrices[selectedItem];
  const total = itemPrice * quantity;
  priceTotal.textContent = `GH₵${total.toFixed(2)}`;

  const amount = amountPaid.valueAsNumber;
  const balance = amount - total;
  balanceOutput.textContent = `GH₵${balance.toFixed(2)}`;
}

selectElement.addEventListener('change', displayPrice);
orderedQuantity.addEventListener('input', calculateTotal);
amountPaid.addEventListener('input', calculateTotal);

displayPrice();
