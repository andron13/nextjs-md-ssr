import Footer from './ui/Footer';
import Header from './ui/Header';
import Main from './ui/Main';

function FiltersPopup() {
  return (
    <div className="absolute z-30 mt-4 w-80 rounded-2xl border-b border-primary-100 bg-white pb-5 shadow-2xl sm:left-full sm:-translate-x-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default FiltersPopup;
