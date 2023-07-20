import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto_Condensed, Montserrat } from 'next/font/google';

const roboto = Roboto_Condensed({ subsets: ['latin'], weight: ['300', '400', '700'] });
// const mont = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${roboto.className}`}>
            <Component {...pageProps} />
        </main>
    );
}
