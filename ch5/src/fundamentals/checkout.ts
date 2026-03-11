export interface TaxService {
  calculateTax(amount: number): number;
}

export function checkout(amount: number, taxService: TaxService): number {
  return amount + taxService.calculateTax(amount);
}
