import '@/styles/globals.css'
import Header from '@/common/components/header/Header'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header displayLogo />
    <Component {...pageProps} />
  </>
}
