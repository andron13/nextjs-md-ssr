//components/mainLayout.js
import Head from 'next/head';
import React from 'react';

import Footer from '../footer';

const MainLayout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactElement;
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col min-h-screen max-w-5xl mx-auto">
        {children}
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
