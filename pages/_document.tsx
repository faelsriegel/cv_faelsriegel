import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            href="/fonts/Geometria.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Geometria.ttf"
            as="font"
            crossOrigin=""
          />
          <meta title="Rafael Stuepp Riegel" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#212529" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <meta name="application-name" content="&nbsp;" />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
