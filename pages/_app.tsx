import type { AppProps } from 'next/app';
import { NavigationBar } from '../components/NavigationBar';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
