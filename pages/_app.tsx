import React, { useState } from "react";
// ensure all pages have Bootstrap CSS
import "../style.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <>
      <title>Business | Bootstrap 5 Business Template</title>

      <link
        rel="shortcut icon"
        href="/assets/images/favicon.svg"
        type="image/svg"
      />

      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

      <link rel="stylesheet" href="/assets/css/lineicons.css" />

      <link rel="stylesheet" href="/assets/css/tiny-slider.css" />

      <link rel="stylesheet" href="/assets/css/glightbox.min.css" />

      <Component {...pageProps} />

      <script src="/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/glightbox.min.js"></script>
      <script src="/assets/js/main.js"></script>
      <script src="/assets/js/tiny-slider.js"></script>
      <script src="/assets/js/js.js"></script>
    </>
  );
}

export default MyApp;
