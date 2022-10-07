import Head from "next/head";

const Seo = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta
        name="description"
        content={seo.description}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta
        property="og:description"
        content={seo.description}
      />
      <meta
        property="og:image"
        content={seo.thumbnailUrl}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta
        property="twitter:description"
        content={seo.description}
      />
      <meta
        property="twitter:image"
        content={seo.thumbnailUrl}
      />
    </Head>
  );
};

export default Seo;