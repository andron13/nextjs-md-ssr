import MainLayout from '../components/layouts/mainLayout';

import '../styles/globals.css';
import FiltersProvider from '../context/FiltersProvider';

function MyApp({ Component, pageProps }) {
  return (
    <FiltersProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </FiltersProvider>
  );
}

export default MyApp;
