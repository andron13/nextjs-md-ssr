import Head from 'next/head';

import Logo from '../logo/logo';
import SearchInput from '../searchInput/searchInput';
import SeoScripts from '../seo/seoScripts';

type propsType = {
  children: React.ReactElement;
};

const MainLayout = ({ children }: propsType) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-40 bg-primary-50 pb-5 w-full sm:pb-0 2xl:container mx-auto">
        <Logo />
        <SearchInput />
      </header>
      <section className="w-full max-w-[955px] mt-5 mx-auto px-6 mb-8 sm:mt-10 lg:px-0">
        {children}
        <SeoScripts />
      </section>
    </>
  );
};

export default MainLayout;
