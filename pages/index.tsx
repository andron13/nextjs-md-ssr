import React from 'react';

import HomeLayout from '../components/layouts/homeLayout';
import { getAllPostsData } from '../service/postHandler';

export async function getStaticProps() {
  const allPostsData = await getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Block = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactElement | string;
  className: string;
}) => (
  <div className={`rounded-lg p-8 text-white text-center ${className}`}>
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="mt-4">{children}</p>
  </div>
);

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
);

const Index = ({ allPostsData }) => {
  return (
    <HomeLayout>
      <div>Here will be some content soon!</div>
      <div>And some more to please the compiler</div>
    </HomeLayout>
  );
};

export default Index;
