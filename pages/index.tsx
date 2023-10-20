import { useEffect } from 'react';

import HomeLayout from '../components/layouts/homeLayout';
import RecepiesBlock from '../components/recepiesBlock/RecipesBlock';
import RecepiesSelector from '../components/recepiesSelector/RecepiesSelector';
import Slider from '../components/slider/Slider';
import { usePosts } from '../context/PostsProvider';
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
  const { updatePosts } = usePosts();

  useEffect(() => {
    updatePosts(allPostsData);
  }, [allPostsData, updatePosts]);

  return (
    <HomeLayout>
      <Slider />
      <RecepiesSelector />
      <RecepiesBlock />
    </HomeLayout>
  );
};

export default Index;
