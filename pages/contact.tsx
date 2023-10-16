import Image from 'next/image';

import wework from '../public/assets/img/webpage/wework.jpeg';

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-3xl font-bold">Contact Page</h1>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">English</h2>

        <p>
          This is a test webpage and it is under development. Please check back later for updates.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">Deutsch</h2>
        <p>
          Dies ist eine Testseite und sie befindet sich in der Entwicklung. Bitte schauen Sie später
          wieder vorbei, um Updates zu erhalten.
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold">Русский</h2>
        <p>
          Это тестовая страница, она находится в разработке. Пожалуйста, вернитесь позже для
          обновлений.
        </p>
      </div>
      <div className="mx-auto flex max-w-screen-xl items-center justify-center ">
        <Image
          src={wework}
          alt="Logo"
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ContactPage;
