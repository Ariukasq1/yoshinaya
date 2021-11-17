import React from "react";
import Head from "next/head";

function Header({ title, image }) {
  let defaultUrl = "";

  if (process.browser) {
    defaultUrl = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{title || "YOSHINOYA"}</title>

        <meta charSet="UTF-8" />
        <meta name="keywords" content="wp, gerege" />
        <meta
          name="description"
          content="Yoshinoya нь Япон улсын хамгийн алдартай түргэн хоолны сүлжээ ресторануудын нэг бөгөөд дэлхийн хамгийн анхны Gyudon буюу Үхрийн махтай боулаар “Амттай, Энгийн, Түргэн” гэсэн уриан доор 122 жилийн турш одоог хүртэл үйл ажиллагаа явуулж дэлхийн хамгийн анхны ресторан юм. "
        />
        <meta name="author" content="Here is website author url" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        <meta property="og:title" content={title || "YOSHINOYA"} />
        <meta
          property="og:description"
          content="Yoshinoya нь Япон улсын хамгийн алдартай түргэн хоолны сүлжээ ресторануудын нэг бөгөөд дэлхийн хамгийн анхны Gyudon буюу Үхрийн махтай боулаар “Амттай, Энгийн, Түргэн” гэсэн уриан доор 122 жилийн турш одоог хүртэл үйл ажиллагаа явуулж дэлхийн хамгийн анхны ресторан юм. "
        />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image || "/images/yoshinoya.jpg"} />
        <meta property="og:site_name" content="YOSHINOYA" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title || "YOSHINOYA"} />
        <meta name="twitter:url" content={defaultUrl} />
        <meta
          name="twitter:description"
          content="Yoshinoya нь Япон улсын хамгийн алдартай түргэн хоолны сүлжээ ресторануудын нэг бөгөөд дэлхийн хамгийн анхны Gyudon буюу Үхрийн махтай боулаар “Амттай, Энгийн, Түргэн” гэсэн уриан доор 122 жилийн турш одоог хүртэл үйл ажиллагаа явуулж дэлхийн хамгийн анхны ресторан юм. "
        />
        <meta name="twitter:image" content={image || "/images/yoshinoya.jpg"} />
        <meta name="twitter:site" content="@your-site-twitter-name" />
        <meta name="twitter:creator" content="@your-site-twitter-name" />
        <meta name="twitter:image:alt" content="YOSHINOYA" />

        <link
          rel="shortcut icon"
          id="favicon"
          href="/images/yoshi-icon.svg"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
    </>
  );
}

export default Header;
