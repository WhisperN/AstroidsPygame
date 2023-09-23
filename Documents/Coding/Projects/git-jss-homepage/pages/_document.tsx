import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={""}>
      <Head />
      <body id={"body"} className={"bg-white dark:bg-black"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
