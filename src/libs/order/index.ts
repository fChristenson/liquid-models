import { IField } from "../form";

export enum OrderState {
  NEW,
  SENT
}

/**
 * By moving our fields in to an array instead of adding
 * them as fields on the model the model is now more flexible.
 *
 * The downside is that it becomes harder to perform logic on the model
 * and we don't know if a model contains a field or not, we always have to check.
 */
export interface IOrder {
  userId: string;
  type: string;
  createdAt: string;
  state: OrderState;
  fields: IField[];
}

/**
 * Specific orders that will not scale so well
 * escpecially in a relation database.
 *
 * If different manufacturers have different
 * forms the permutations go up even more.
 */
interface IBaseOrder {
  userId: string;
  createdAt: string;
  state: OrderState;
}

export interface ISvOrder extends IBaseOrder {
  name: string;
  email: string;
  phone: string;
  personalNumber: string;
}

export interface IDkOrder extends IBaseOrder {
  name: string;
  email: string;
  phone: string;
  csp: string;
}

export interface IEnOrder extends IBaseOrder {
  name: string;
  email: string;
  phone: string;
}
