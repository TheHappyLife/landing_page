import Head from "next/head";
const Seo = () => {
  return (
    <Head>
      <title>Landing page | Test SEO | SEO landing page | On top</title>
      <meta
        name="title"
        content="Landing page | Test SEO | SEO landing page | On top"
      />
      <meta
        name="description"
        content="Landing page is required for each company to increase revenue"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://landing-page-beige-two.vercel.app/"
      />
      <meta
        property="og:title"
        content="OG Landing page | Test SEO | SEO landing page | On top"
      />
      <meta
        property="og:description"
        content="OG Landing page is required for each company to increase revenue"
      />
      <meta
        property="og:image"
        content="https://landing-page-beige-two.vercel.app/landingpage.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://landing-page-beige-two.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="TW Landing page | Test SEO | SEO landing page | On top"
      />
      <meta
        property="twitter:description"
        content="TW Landing page is required for each company to increase revenue"
      />
      <meta
        property="twitter:image"
        content="https://landing-page-beige-two.vercel.app/landingpage.jpg"
      ></meta>
    </Head>
  );
};
export default Seo;
