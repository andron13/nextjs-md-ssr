import { FC } from 'react';

const ContentBottom: FC = () => {
  return (
    <div
      className="mb-2 flex h-16 animate-pulse items-center justify-center rounded-md bg-gray-300 px-2 text-gray-600 shadow-md"
      style={{ minHeight: '200px', width: '100%' }}
    >
      Здесь могла бы быть ваша реклама Google AdSense. Но её нет.
    </div>
  );
};

export default ContentBottom;
