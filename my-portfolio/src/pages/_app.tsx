import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/Navbar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
