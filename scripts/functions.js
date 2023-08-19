let itemTitle = '';
let itemPrice = 0;
let totalPrice = 0;
function accessItemProperty(itemClicked) {
  itemTitle = itemClicked.children[1].children[1].innerText;
  itemPrice = parseFloat(itemClicked.children[1].children[2].children[0].innerText);
  totalPrice += itemPrice;
}

let i = 0;
function renderClickedItems() {
  const p = document.createElement('p');
  p.innerHTML = `${++i}. ${itemTitle}`;
  const cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsContainer.appendChild(p);
}

function renderTotalPrice() {
  document.getElementById('total-price').innerText = parseFloat(totalPrice.toFixed(2));
}