import { useEffect } from 'react';

import HomeLayout from '../components/layouts/homeLayout';
import RecepiesBlock from '../components/recepiesBlock/RecipesBlock';
import RecepiesSelector from '../components/recepiesSelector/RecepiesSelector';
import Slider from '../components/slider/Slider';
import { useRecipes } from '../context/RecipeProvider';
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
  const { updateRecipes } = useRecipes();

  useEffect(() => {
    updateRecipes(allPostsData);
  }, [allPostsData, updateRecipes]);

  return (
    <HomeLayout>
      <Slider />
      <RecepiesSelector />
      <RecepiesBlock />
    </HomeLayout>
  );
};

export default Index;
