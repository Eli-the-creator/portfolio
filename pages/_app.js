import Script from "next/script";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleTagManager gtmId="G-SH8YG7M3PV" />

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
