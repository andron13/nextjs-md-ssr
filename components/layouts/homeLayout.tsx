import Head from 'next/head';
import React from 'react';

import { webSiteSlogan, webSiteTitle } from '../../constants/webSiteVars';
import Navbar from '../navBar';

type propsType = { children: React.ReactElement[] };

const HomeLayout = ({ children }: propsType) => {
  return (
    <>
      <Head>
        <title>{webSiteTitle}</title>
      </Head>
      <main className="">{children}</main>
    </>
  );
};
export default HomeLayout;
