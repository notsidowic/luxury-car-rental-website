// pages/_app.js

import { BrowserRouter } from "react-router-dom";
import "@styles/globals.css"; // Make sure to import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <BrowserRouter>
      <Component {...pageProps} />
    </BrowserRouter>
  );
}

export default MyApp;
