export interface OldPaymentSystem {
  pay(amount: number): string;
}

export class LegacyPayment implements OldPaymentSystem {
  pay(amount: number): string {
    return `Paid $${amount} using the legacy payment system.`;
  }
}

export interface NewPaymentSystem {
  makePayment(amount: number): string;
}

export class ModernPayment implements NewPaymentSystem {
  makePayment(amount: number): string {
    return `Paid $${amount} using the modern payment API.`;
  }
}

export class PaymentAdapter implements NewPaymentSystem {
  constructor(private readonly legacyPayment: OldPaymentSystem) {}

  makePayment(amount: number): string {
    return this.legacyPayment.pay(amount);
  }
}

export const adapterExample = new PaymentAdapter(new LegacyPayment()).makePayment(100);
