import React from 'react';

import HomeLayout from '../components/layouts/homeLayout';
import RecepiesBlock from '../components/recepiesBlock/RecipesBlock';
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

const Index = ({ allPostsData }) => {
  return (
    <HomeLayout>
      <Slider />
      <RecepiesSelector />
      <RecepiesBlock />
    </HomeLayout>
  );
};

export default Index;
