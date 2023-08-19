
function addItemToCart(itemClicked) {
  accessItemProperty(itemClicked);
  renderClickedItems();
  renderTotalPrice();
}

document.getElementById('apply-btn').addEventListener('click', function () {
  // console.log('discount');
  if (document.getElementById('coupon').value === 'SELL200') {
    calculateDiscountValue();
    renderFinalTotal();
  }
  else {
    alert('Coupon is not valid!');
    return;
  }
});

