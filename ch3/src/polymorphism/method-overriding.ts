export class PaymentMethodBase {
  processPayment(amount: number): void {
    console.log(`Processing default payment: ${amount}`);
  }
}

export class CreditCard extends PaymentMethodBase {
  override processPayment(amount: number): void {
    console.log(`Processing credit card payment for amount: ${amount}`);
  }
}

export class DebitCard extends PaymentMethodBase {
  override processPayment(amount: number): void {
    console.log(`Processing debit card payment for amount: ${amount}`);
  }
}

export const paymentMethods: PaymentMethodBase[] = [new CreditCard(), new DebitCard()];
