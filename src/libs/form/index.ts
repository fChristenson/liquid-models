/**
 * Fields we store in our model.
 *
 * We could convert the stored data types but it is simpler
 * to just store the form data and convert it when needed
 */
export interface IField {
  name: string;
  value: string;
}

// Field we render out to the user form
export type IFormField = {
  name: Fields;
  type: string;
};

export enum Fields {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  PERSONAL_NUMBER = "personalNumber",
  CSP = "csp"
}
