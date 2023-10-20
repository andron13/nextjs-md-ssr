import MainLayout from '../components/layouts/mainLayout';

import '../styles/globals.css';
import FiltersProvider from '../context/FiltersProvider';
import RecipeProvider from '../context/RecipeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <RecipeProvider>
      <FiltersProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </FiltersProvider>
    </RecipeProvider>
  );
}

export default MyApp;
