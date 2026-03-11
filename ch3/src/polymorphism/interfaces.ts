export interface PaymentMethod {
  processPayment(amount: number): void;
}

export class CreditCard implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment for amount: ${amount}`);
  }
}

export class DebitCard implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment for amount: ${amount}`);
  }
}

export const interfacePaymentMethods: PaymentMethod[] = [
  new CreditCard(),
  new DebitCard(),
];
