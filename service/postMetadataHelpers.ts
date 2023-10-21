import path from 'path';

import matter from 'gray-matter';

import { resultObj } from '../types';

function parseMetadata(
  matterResult: matter.GrayMatterFile<string>,
  filepath: string
): Omit<resultObj, 'content'> {
  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle || '',
    date:
      matterResult.data.date instanceof Date
        ? matterResult.data.date.toISOString()
        : new Date().toISOString(),
    author: matterResult.data.author || 'admin',
    language: matterResult.data.language || 'en',
    category: matterResult.data.category || '',
    taxonomy: matterResult.data.tags || '',
    ingredients: matterResult.data.ingredients || '',
    weight: matterResult.data.weight || 100,
    slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
    image: matterResult.data.image || '',
    description: matterResult.data.description,
    time: matterResult.data.time || 0,
    calories: matterResult.data.calories || 0,
    isSpicy: matterResult.data.isSpicy || false,
    isVegan: matterResult.data.isVegan || false,
  };
}

export default parseMetadata;
