import { Fields } from "../libs/form";

export const admin = (fields: Fields[]) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>admin</title>
  </head>
  <body>
    <form action="/fields" method="post">
      ${fields
        .map(
          f =>
            `
              <label>
                ${f}
                <input placeholder="${f}" type="checkbox" name="${f}" value="${f}" />
              </label>
            `
        )
        .join("")}
      <input type="submit" />
    </form>
  </body>
</html>
  `;
};
