import React from 'react';
// import IndexView from 'views/IndexView';
import Head from 'next/head';
import DesignCompanyPage from './design-company';

const IndexPage = () => {
  const seo = {
    title: 'My Page Title',
    description: 'This is the description of my page.',
    keywords: [
      'web design in Midtown Toronto',
      'web design for small businesses',
      'lifestyle web design for cafes',
      'wellness web design for businesses',
      'affordable web design for startups',
      'mobile-friendly web design for e-commerce',
      'local SEO services for businesses',
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

      <DesignCompanyPage />
    </>
  );
};

export default IndexPage;
