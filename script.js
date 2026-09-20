const price = 12;
let cups = 0;

const orderButton = document.getElementById('order-button');
const orderSummary = document.getElementById('order-summary');

orderButton.addEventListener('click', () => {
  cups += 1;
  const total = cups * price;
  orderSummary.textContent = `${cups} ${cups === 1 ? 'coffee' : 'coffees'} — Total: $${total}`;
});
