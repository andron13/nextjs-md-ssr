import Link from 'next/link';
import React from 'react';

import PostsIndexLayout from '../../components/layouts/postsIndexLayout';
import postMetadata from '../../service/postMetadata';
import { MetadatObj } from '../../types';

type propsType = { posts: MetadatObj[] };

const PostsIndex = ({ posts }: propsType) => {
  const sortedPosts = posts.sort((a, b) => Number(a.weight) - Number(b.weight));
  return (
    <PostsIndexLayout>
      <ol className="mb-2 ml-6 list-decimal">
        {sortedPosts.map((post) => (
          <li key={post.slug} className="m-2 text-lg">
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              <span>
                {post.title} / {post.weight}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </PostsIndexLayout>
  );
};

export async function getStaticProps() {
  const posts = await postMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default PostsIndex;
