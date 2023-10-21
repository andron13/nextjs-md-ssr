import { webSiteTitle } from '../../constants/webSiteVars';
import Aside from '../aside';
import Navbar from '../navBar';

type propsType = { children: React.ReactElement };

const PostsIndexLayout = ({ children }: propsType) => {
  return (
    <>
      <header className="rounded-md bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 py-2 shadow-md">
        <div className="container mx-auto text-center text-black">
          <h1 className="text-4xl font-bold">Сборник статей</h1>
          <p className="mt-2 text-lg">{webSiteTitle}</p>
        </div>
      </header>
      <main className="my-2 grid grid-cols-1 gap-2 rounded-lg text-black shadow-md sm:grid-cols-5">
        <div className="sm:col-start-1 sm:col-end-5">{children}</div>
        <Aside />
      </main>
    </>
  );
};
export default PostsIndexLayout;
