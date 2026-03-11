export type CartItem = {
  price: number;
  quantity: number;
};

export function checkout(cart: CartItem[], discount: number): void {
  let total = 0;

  for (const item of cart) {
    total += item.price * item.quantity;
  }

  total = total * (1 - discount / 100);
  console.log("Your total is: $" + total.toFixed(2));
  console.log("Thank you for shopping with us!");
}
