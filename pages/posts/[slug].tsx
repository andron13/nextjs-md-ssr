import React, { useEffect, useRef } from 'react';

import AdvertisingContentBottom from '../../components/advertising/contentBottom';
import Aside from '../../components/aside';
import DisqusComments from '../../components/disqusComments/disqusComments';
import PostPageLayout from '../../components/layouts/postPageLayout';
import { MdToHtml } from '../../components/markdown';
import { getPostData } from '../../service/postHandler';
import Image from 'next/image';
import postMetadata, { getAllPostSlugs } from '../../service/postMetadata';
import { resultObj, postData } from '../../types';

const PostPage = ({ postMetadata, content }: postData) => {
  const { title, subtitle, date, author, language, category, taxonomy, ingredients, weight, slug, description, image } =
    postMetadata;
  const ingridientsDiv = useRef<HTMLDivElement | null>(null)
  const directionsDiv = useRef<HTMLDivElement | null>(null)
  const ingridientsBtn= useRef<HTMLButtonElement | null>(null)
  const directionsBtn= useRef<HTMLButtonElement | null>(null)


  useEffect(() => {
    ingridientsDiv.current = document.getElementById("ingridients") as HTMLDivElement;
    directionsDiv.current = document.getElementById("directions") as HTMLDivElement;
    ingridientsBtn.current = document.getElementById("ingridients_btn") as HTMLButtonElement;
    directionsBtn.current = document.getElementById("directions_btn") as HTMLButtonElement;
  }, []);

  function handleClick(e) {
    if (e.target.id === "ingridients_btn") {
      e.target.classList.add("active");
      directionsBtn.current?.classList.remove("active");
      ingridientsDiv.current?.classList.add("block");
      ingridientsDiv.current?.classList.remove("hidden");
      directionsDiv.current?.classList.remove("block");
      directionsDiv.current?.classList.add("hidden");
    }

    if (e.target.id === "directions_btn") {
      e.target.classList.add("active");
      ingridientsBtn.current?.classList.remove("active");
      directionsDiv.current?.classList.add("block");
      directionsDiv.current?.classList.remove("hidden");
      ingridientsDiv.current?.classList.remove("block");
      ingridientsDiv.current?.classList.add("hidden");
    }
  }

  return (
    <PostPageLayout postMetadata={postMetadata}>
      {/*<header></header>*/}
      <main className="my-2 text-black sm:grid-cols-5">
        <div className="max-w-screen-lg">
          <article lang={language} className="my-1 bg-white text-gray-800 ">
            {/* <AdvertisingContentBottom />
            <header>
              <p>title: {title}</p>
              <p>subtitle: {subtitle}</p>
              <p>date: {date}</p>
              <p>author: {author}</p>
              <p>category: {category}</p>
              <p>ingredients: {ingredients}</p>
              <p>weight: {weight}</p>
              <p>slug: {slug}</p>
              <p>taxonomy: {taxonomy}</p>
              <p>language: {language}</p>
              <p>img: {imageUrl}</p>
            </header>
            <hr /> */}
            <div>
              <div className="min-h-[280px] w-full relative pl-6 pt-8 pr-24 rounded-3xl sm:pr-96 sm:pt-12 flex flex-col gap-y-4 sm:gap-y-8">
                <div className="w-full h-full absolute inset-x-0 top-0 bg-black/50 z-10 rounded-3xl"></div>
                  <img src="/assets/icons/arrowBack.svg" className="relative z-20 w-4 h-5" alt="" />
                  <Image src={image} alt={slug} fill objectFit='cover' className='rounded-3xl'/>
                  <div>
                    <h1 className="relative z-20 text-white text-2xl mb-0">{title}</h1>
                    <p className="relative z-20 text-white/80 text-xs">{description}</p>
                  </div>
                  <div className="relative z-20 text-white flex justify-between max-w-[300px]">
                    <div>
                      <h6 className="text-xs text-white/80">Каллории</h6>
                      <p className="text-xs text-white/80">1000</p>
                    </div>
                    <div>
                      <h6 className="text-xs text-white/80">Время</h6>
                      <p className="text-xs text-white/80">30 минут</p>
                    </div>
                    <div>
                      <h6 className="text-xs text-white/80">Категория</h6>
                      <p className="text-xs text-white/80">1000</p>
                    </div>
                  </div>
                </div>
            <div className="p-6" onClick={handleClick}>
              <MdToHtml mdSource={content} />
            </div>
            </div>
          </article>
          <DisqusComments postMetadata={postMetadata} />
        </div>
        {/* <Aside /> */}
      </main>
    </PostPageLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs();

  const paths = postSlugs.map(({ slug }) => ({
    // Извлекаем slug из каждого объекта
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const res: postData = await getPostData(params.slug);
    const { content, postMetadata } = res;
    return { props: { content, postMetadata } };
  } catch (error) {
    return { notFound: true };
  }
}

export default PostPage;
