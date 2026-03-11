export interface PaymentStrategy {
  pay(amount: number): string;
}

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} with PayPal.`;
  }
}

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} with a credit card.`;
  }
}

export class BankTransferPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} with a bank transfer.`;
  }
}

export class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  pay(amount: number): string {
    return this.strategy.pay(amount);
  }
}

const paymentContext = new PaymentContext(new PayPalPayment());
const firstPayment = paymentContext.pay(50);
paymentContext.setStrategy(new CreditCardPayment());
const secondPayment = paymentContext.pay(75);

export const strategyExample = [firstPayment, secondPayment];
