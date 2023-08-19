let itemTitle = '';
let itemPrice = 0;
let totalPrice = 0;
function accessItemProperty(itemClicked) {
  itemTitle = itemClicked.children[1].children[1].innerText;
  itemPrice = parseFloat(itemClicked.children[1].children[2].children[0].innerText);
  totalPrice += itemPrice;

  if (totalPrice > 0) {
    document.getElementById('purchase-btn').removeAttribute('disabled');
  }

  if (totalPrice >= 200) {
    document.getElementById('apply-btn').removeAttribute('disabled');
  }
}

let i = 0;
function renderClickedItems() {
  const p = document.createElement('p');
  p.innerHTML = `${++i}. ${itemTitle}`;
  const cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsContainer.appendChild(p);
}

function renderTotalPrice() {
  document.getElementById('total-price').innerText = parseFloat(totalPrice).toFixed(2);
}

let discount = 0;
function calculateDiscountValue() {
  discount = (totalPrice * 20) / 100;
  document.getElementById('discount').innerText = parseFloat(discount).toFixed(2);
}
let finalTotal = 0;
function renderFinalTotal() {
  finalTotal = totalPrice - discount;
  document.getElementById('final-total').innerText = parseFloat(finalTotal).toFixed(2);
}