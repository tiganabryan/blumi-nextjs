import React from 'react';
// import IndexView from 'views/IndexView';
import Head from 'next/head';
import DesignCompanyPage from './design-company';

const IndexPage = () => {
  const seo = {
    title: 'blumi design | home',
    description: 'website design & repair for midsize companies.',
    keywords: [
      'web design in Midtown Toronto',
      'web design for small businesses',
      'fix wordpress website toronto',
      'wellness web design for toronto businesses',
      'affordable web design for toronto businesses',
      'mobile-friendly web design toronto',
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
