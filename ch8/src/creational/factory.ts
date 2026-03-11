export interface PaymentProcessor {
  processPayment(amount: number): string;
}

export class PayPal implements PaymentProcessor {
  processPayment(amount: number): string {
    return `Processing payment of $${amount} through PayPal.`;
  }
}

export class Stripe implements PaymentProcessor {
  processPayment(amount: number): string {
    return `Processing payment of $${amount} through Stripe.`;
  }
}

export class PaymentFactory {
  static getProcessor(type: 'paypal' | 'stripe'): PaymentProcessor {
    if (type === 'paypal') {
      return new PayPal();
    }

    return new Stripe();
  }
}

export const paymentFactoryExample = PaymentFactory.getProcessor('paypal').processPayment(100);
