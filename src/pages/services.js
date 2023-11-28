import React from 'react';
import Head from 'next/head';
import Pricing from 'views/Pricing';

const Services = () => {
  const seo = {
    title: 'services | blumi',
    description: 'let us fix those nagging bugs on your website.',
    keywords: [
      'affordable web design toronto',
      'web design for small businesses',
      'wordpress website maintenance toronto',
      'wellness web design for toronto businesses',
      'affordable web design for toronto businesses',
      'mobile-friendly web design toronto',
      'local SEO services for businesses',
      'blumi design',
      'blumi',
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

      <Pricing />
    </>
  );
};

export default Services;
