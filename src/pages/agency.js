import React from 'react';
import Head from 'next/head';

import Agency from 'views/Agency';

const AgencyPage = () => {
  const seo = {
    title: 'portfolio | blumi',
    description: "blumi design's websites.",
    keywords: [
      'affordable web design toronto',
      'web design for small businesses',
      'wordpress website maintenance toronto',
    ],
  };

  const { title, description, keywords } = seo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>

      <Agency />
    </>
  );
};

export default AgencyPage;
