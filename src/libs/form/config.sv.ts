import { IFormField, Fields } from ".";

export const svFormFields: IFormField[] = [
  { name: Fields.NAME, type: "text" },
  { name: Fields.EMAIL, type: "email" },
  { name: Fields.PHONE, type: "tel" },
  { name: Fields.PERSONAL_NUMBER, type: "number" }
];
