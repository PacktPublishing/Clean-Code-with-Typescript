export * from "./classes/object-literal";
export * from "./classes/cake-class";
export * from "./classes/cake-static-members";
export * from "./inheritance/dummy-class";
export * from "./inheritance/inheritance-models";
export * from "./inheritance/prototype-chain";
export * from "./encapsulation/getters-setters";
export * from "./encapsulation/access-modifiers";
export * from "./polymorphism/method-overriding";
// Both polymorphism examples export CreditCard and DebitCard. Alias the
// interface-based versions here so this barrel file does not re-export duplicate names.
export {
  type PaymentMethod,
  CreditCard as InterfaceCreditCard,
  DebitCard as InterfaceDebitCard,
  interfacePaymentMethods,
} from "./polymorphism/interfaces";
export * from "./composition/composition-over-inheritance";
