import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { GetStaticProps } from 'next';



export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
    }
  }
}

interface Props extends AppProps {
  helmet: any
}

const MyApp = ({ Component, pageProps }: Props) => {

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
