import React from 'react';
import Head from 'next/head';
import ContactPageCover from 'views/ContactPageCover';

const ContactCoverPage = () => {
  const seo = {
    title: 'contact us | blumi',
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

      <ContactPageCover />
    </>
  );
};

export default ContactCoverPage;
