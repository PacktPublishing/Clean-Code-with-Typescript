/**
 * Interface representing an item in the shopping cart.
 */
export interface ShoppingCartItem {
  price: number;
  quantity: number;
}

/**
 * Manages a shopping cart.
 * @remark The ShoppingCart class provides methods for adding items, calculating total prices,
 * and applying discounts. It is designed to be extensible and easy to use.
 */
export class ShoppingCart {
  private cartItems: ShoppingCartItem[] = [];

  /**
   * Adds an item to the shopping cart.
   *
   * @param item The item to add.
   */
  addItem(item: ShoppingCartItem): void {
    this.cartItems.push(item);
  }

  /**
   * Calculates the total price of all items in the cart.
   * @returns The total price.
   */
  calculateTotalPrice(): number {
    let total = 0;

    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }

    return total;
  }

  /**
   * Applies a discount to the total price.
   * @param discount The discount percentage (for example, 10 for 10% off).
   * @returns The discounted total price.
   */
  applyDiscount(discount: number): number {
    const total = this.calculateTotalPrice();
    return total * (1 - discount / 100);
  }

  /**
   * Completes the checkout process.
   * @param discount The discount percentage to apply.
   * @returns The final total after applying the discount.
   */
  checkout(discount: number): number {
    const total = this.applyDiscount(discount);
    console.log("Your total is: $" + total.toFixed(2));
    console.log("Thank you for shopping with us!");
    return total;
  }
}
