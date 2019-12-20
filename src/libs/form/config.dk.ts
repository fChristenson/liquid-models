import { IFormField, Fields } from ".";

export const dkFormFields: IFormField[] = [
  { name: Fields.NAME, type: "text" },
  { name: Fields.EMAIL, type: "email" },
  { name: Fields.PHONE, type: "tel" },
  { name: Fields.CSP, type: "number" }
];
