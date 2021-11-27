import '@styles/tailwind.css'
import { AppProps } from 'next/app'
import { Flipper, Flipped } from 'react-flip-toolkit'
import Head from 'next/head'

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Flipper flipKey={router.asPath}>
      <Head>
        <title>Photos | CryogenicPlanet</title>
        <link rel="icon" href="/camera.svg"></link>
      </Head>
      {/* // Wrapping our page `Component` with a `Flipped` component */}
      <Flipped flipId="page">
        <Component {...pageProps} />
      </Flipped>
    </Flipper>
  )
}

export default CustomApp
