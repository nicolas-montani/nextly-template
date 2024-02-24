import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-QW373CQCVP' })
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
