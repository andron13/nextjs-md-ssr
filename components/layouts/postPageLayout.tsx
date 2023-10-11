import Head from 'next/head';

import { webSiteTitle } from '../../constants/webSiteVars';
import { DateFormatter } from '../../service/dateFormatter';
import { BreadcrumbObj, MetadatObj } from '../../types';
import AdvertisementPlaceholder from '../advertising/placeholder';
import UserImg from '../author/userImg';
import UserName from '../author/userName';
import Navbar from '../navBar';
import Breadcrumb from '../seo/breadcrumb';

type propsType = {
  postMetadata: MetadatObj;
  children: React.ReactElement;
};

const PostPageLayout = ({ postMetadata, children }: propsType) => {
  const { title, subtitle, category, slug, date, author } = postMetadata;
  const breadcrumbs: BreadcrumbObj[] = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: title, href: `/posts/${category}/${slug}` },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
      </Head>
      <header className="rounded-md bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-300 py-2 shadow-md">
        <div className="container mx-auto text-center text-black">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2 text-lg">{subtitle + webSiteTitle}</p>
        </div>
      </header>
      <Navbar />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <main>
        <div className="flex-grow">{children}</div>
      </main>
      <div className="container mx-auto flex flex-row items-center justify-between rounded-md text-center text-black shadow-md">
        <div>
          <DateFormatter dateString={date} />
        </div>
        <div className="flex items-center gap-2 space-x-4">
          <UserImg />
          <UserName userName={author} />
        </div>
      </div>
      <AdvertisementPlaceholder />
    </>
  );
};
export default PostPageLayout;
