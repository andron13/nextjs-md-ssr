import React from 'react';

import Aside from '../../components/aside';
import PostPageLayout from '../../components/layouts/postPageLayout';
import { MdToHtml } from '../../components/markdown';
import { MetadatObj } from '../../types';
import { getPostData } from '../../utils/postHandler';
import { getAllPostSlugs } from '../../utils/postMetadata';

type PostPageProps = { postMetadata: MetadatObj; content: string };

const PostPage = ({ postMetadata, content }: PostPageProps) => {
  return (
    <PostPageLayout postMetadata={postMetadata}>
      <header></header>
      <main className="text-black rounded-lg my-2 grid sm:grid-cols-5 grid-cols-1 gap-2">
        <div className="sm:col-start-1 sm:col-end-5">
          <MdToHtml mdSource={content} />
        </div>
        <Aside />
      </main>
    </PostPageLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs: { slug: string }[] = await getAllPostSlugs();

  const paths = postSlugs.map(({ slug }) => ({
    // Извлекаем slug из каждого объекта
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const { content, postMetadata }: PostPageProps = await getPostData(params.slug);
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default PostPage;
