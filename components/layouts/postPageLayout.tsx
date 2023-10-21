import Head from 'next/head';

import { webSiteTitle } from '../../constants/webSiteVars';
import { DateFormatter } from '../../service/dateFormatter';
import { BreadcrumbObj, resultObj } from '../../types';
import AdvertisementPlaceholder from '../advertising/placeholder';
import UserImg from '../author/userImg';
import UserName from '../author/userName';
import Navbar from '../navBar';
import Breadcrumb from '../seo/breadcrumb';

type propsType = {
  postMetadata: Omit<resultObj, 'content'>;
  children: React.ReactElement;
};

const PostPageLayout = ({ postMetadata, children }: propsType) => {
  const { title, subtitle, category, slug, date, author, image } = postMetadata;
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
      <main>
        <div className="flex-grow">{children}</div>
      </main>
    </>
  );
};
export default PostPageLayout;
