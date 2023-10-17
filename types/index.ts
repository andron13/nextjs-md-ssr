export type LinkObj = {
  title: string;
  path: string;
};

export type BreadcrumbObj = {
  label: string;
  href: string;
};

export type resultObj = {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: string;
  weight: number;
  slug: string;
  language: string;
  taxonomy: string;
  ingredients: string;
  content?: string;
  image: string;
  description: string;
  calories: number;
  time: number;
};

export type postData = {
  postMetadata: Omit<resultObj, 'content'>;
  content: string;
};
