import { Fields, IFormField } from "../libs/form";

export const checkout = (lang: string, fields: IFormField[]) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>${lang}</title>
    </head>
    <body>
      <form action="/form" method="post">
      ${fields
        .map(
          f =>
            `
            <input placeholder="${f.name}" type="${f.type}" name="${f.name}" />
            `
        )
        .join("")}
        <input type="submit" />
      </form>
    </body>
  </html>
  
  `;
};
