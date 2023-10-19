import RecipeCard from './ui/RecipeCard';
import { useRecipes } from '../../context/RecipeProvider';

export default function RecepiesBlock() {
  const { recipes } = useRecipes();

  return (
    <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.title} />
      ))}
    </div>
  );
}
