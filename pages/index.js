import React from "react";
import Link from "../src/components/Link";

function globalState() {
  return (
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  );
}

function Title({ children }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag}
        h2 {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
      <globalState />
      <h1>Alura Cases - Home Page</h1>
      <Link href="/faq">Ir para página do FAQ</Link>
    </div>
  );
}

//teste
