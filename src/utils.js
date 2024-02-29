export function handleQuantityChange(data = [], type = "", id = 0) {
  const cartCopy = [...data];
  const selectedItem = cartCopy.find((item) => item.id === id);
  if (selectedItem) {
    type === "inc"
      ? (selectedItem.quantity += 1)
      : (selectedItem.quantity -= 1);
  }
  return data;
}

export function computeBilling(cart = [], coupon, platformCharges = 0) {
  let total = 0;
  for (var x of cart) {
    total += x.quantity * x.price;
  }
  if (coupon) {
    total = Math.ceil((total / 100) * coupon.value);
  }
  return {
    total: total,
    grandTotal: total + platformCharges,
  };
}
