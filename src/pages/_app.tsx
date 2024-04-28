// The pages/_app.tsx file allows customizes the initialization of pages. 
// Top-level component that wraps all the pages in your application.

import { AppProps } from 'next/app'
import '../styles/main.scss'
import '../styles/output.css'


function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp;
