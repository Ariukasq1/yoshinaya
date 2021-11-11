import React from 'react'
import "../public/styles/style.min.css";
import "../public/styles/base/header.css";
import "../public/styles/base/footer.css";
import "../public/styles/map.css";
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start()
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});

Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="next">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;