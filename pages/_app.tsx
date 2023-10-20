import MainLayout from '../components/layouts/mainLayout';

import '../styles/globals.css';
import FiltersProvider from '../context/FiltersProvider';
import PostsProvider from '../context/PostsProvider';
import RecipeProvider from '../context/RecipeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <FiltersProvider>
        <RecipeProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RecipeProvider>
      </FiltersProvider>
    </PostsProvider>
  );
}

export default MyApp;
