import * as express from "express";
import { admin } from "./views/admin";
import { checkout } from "./views/checkout";
import { fields } from "./libs/admin/config";
import { svFormFields } from "./libs/form/config.sv";
import { dkFormFields } from "./libs/form/config.dk";
import { enFormFields } from "./libs/form/config.en";

export const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/form", (req, res) => {
  res.json(req.body);
});

app.get("/sv", (req, res) => {
  res.send(checkout("sv", svFormFields));
});

app.get("/en", (req, res) => {
  res.send(checkout("en", enFormFields));
});

app.get("/dk", (req, res) => {
  res.send(checkout("dk", dkFormFields));
});

app.get("/admin", (req, res) => {
  res.send(admin(fields));
});

/**
 * By using a more liquid model we can allow manufacturers to set their own form fields
 * to get the data they need, otherwise we may ask a user to input more data than is
 * actually needed to place the order.
 */
app.post("/fields", (req, res) => {
  res.json(req.body); //TOOD: store in db
});
