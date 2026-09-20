const prices = 16;
let cups = 0;

const orderButton = document.getElementById('order-button');
const orderSummary = document.getElementById('order-summary');

orderButton.addEventListener('click', () => {
  cups += 2;
  const total = cups * prices;
  orderSummary.textContent = `${cups} ${cups === 1 ? 'coffee' : 'coffees'} — Total: $${total}`;
});
