import { JSX } from "";
export const Root = (children: JSX.Element) => (
  <html lang="en">
    <head>
      <script
        src="https://unpkg.com/htmx.org@1.9.10"
        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
        crossorigin="anonymous"
      ></script>

      <title>Hello World</title>
    </head>
    <body>
      <h1>Home</h1>

      {children}
    </body>
  </html>
);
