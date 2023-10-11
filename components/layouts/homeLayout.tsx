import Head from 'next/head';
import React from 'react';

import { webSiteTitle } from '../../constants/webSiteVars';

type propsType = { children: React.ReactElement[] };

const HomeLayout = ({ children }: propsType) => {
  return (
    <>
      <Head>
        <title>{webSiteTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
export default HomeLayout;
