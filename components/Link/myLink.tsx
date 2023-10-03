import Link from 'next/link';
import React from 'react';

export const defaultLink = (
  url: string,
  text: string,
  classname = 'text-black hover:text-white hover:bg-black transition duration-300'
) => (
  <Link href={url} key={url + text} className={classname}>
    {text}
  </Link>
);
