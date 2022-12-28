import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="scroller scrollerMain">
        <Main />
        <NextScript />

        <script src="https://js.paystack.co/v1/inline.js"></script>
      </body>
    </Html>
  );
}
