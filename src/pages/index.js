import React from 'react';
// import IndexView from 'views/IndexView';
import Head from 'next/head';
import DesignCompanyPage from './design-company';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>blumi design lorem lorem etc</title>
        <meta
          name="description"
          content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          key="desc"
        />
      </Head>
      <DesignCompanyPage />
    </>
  );
};

export default IndexPage;
