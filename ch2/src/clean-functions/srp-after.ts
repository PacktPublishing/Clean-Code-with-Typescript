export type CheckoutCartItem = {
  price: number;
  quantity: number;
};

export function calculateTotal(cart: CheckoutCartItem[]): number {
  let total = 0;

  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

export function applyDiscount(total: number, discount: number): number {
  return total * (1 - discount / 100);
}

export function printReceipt(total: number): void {
  console.log("Your total is: $" + total.toFixed(2));
  console.log("Thank you for shopping with us!");
}

export function checkoutWithSingleResponsibility(
  cart: CheckoutCartItem[],
  discount: number
): void {
  let total = calculateTotal(cart);
  total = applyDiscount(total, discount);
  printReceipt(total);
}
