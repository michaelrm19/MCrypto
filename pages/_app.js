// External Imports
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

// Internal Imports
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/8efe200e65.js" crossOrigin="anonymous" />
  </ThemeProvider>

);

export default MyApp;
