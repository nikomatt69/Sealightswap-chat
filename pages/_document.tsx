import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full bg-gray-100">
        <Head>
          <meta name="description" content="SeaLightSwap Chat" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="%PUBLIC_URL%/favicon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="%PUBLIC_URL%/xmtp-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="%PUBLIC_URL%/xmtp-icon.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
