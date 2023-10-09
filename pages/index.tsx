import React from 'react';

import HomeLayout from '../components/layouts/homeLayout';
import RecepiesSelector from '../components/recepiesSelector/RecepiesSelector';
import Slider from '../components/slider/Slider';
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

const Index = ({ allPostsData }) => {
  return (
    <HomeLayout>
      <Slider />
      <RecepiesSelector />
      <div>Recepies block</div>
    </HomeLayout>
  );
};

export default Index;
