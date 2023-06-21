import React from 'react';
import Head from 'next/head';
import AboutSideCover from 'views/AboutSideCover';

const AboutSideCoverPage = () => {
  const seo = {
    title: 'about us | blumi',
    description:
      "blumi design's forward thinking team, backed by a mature advisory board.",
    keywords: [
      'affordable web design toronto',
      'web design for small businesses',
      'wordpress website maintenance toronto',
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

      <AboutSideCover />
    </>
  );
};

export default AboutSideCoverPage;
