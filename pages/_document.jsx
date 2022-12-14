import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
			<title>Fake Astro</title>
        	<link 
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
				rel="stylesheet"
				/>
			<link
				href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
				rel="stylesheet"
				/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
			/>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
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