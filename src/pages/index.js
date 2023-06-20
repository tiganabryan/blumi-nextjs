import React from 'react';
// import IndexView from 'views/IndexView';
import Head from 'next/head';
import DesignCompanyPage from './design-company';

const IndexPage = () => {
  const seo = {
    title: 'My Page Title',
    description: 'This is the description of my page.',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
  };

  const [title, description, keywords] = seo;

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
