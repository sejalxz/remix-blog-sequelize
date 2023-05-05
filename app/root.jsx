import { cssBundleHref } from "@remix-run/css-bundle";
import globalStyles from "~/styles/global.css";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: globalStyles,
  },
];

// export const meta = () => {
//   const description = "A remix blog post app.";
//   const keywords = "react,remix,sequelize";
//   return [description, keywords];
// };

export default function App() {
  return (
    <Document title={"PostIt"}>
      <Layout>
        <Outlet />
      </Layout>
      <ScrollRestoration />
      <Scripts />
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error!</h1>
        <p>Unexpected error.. Please try again later </p>
      </Layout>
    </Document>
  );
}
