import path from 'path';

import matter from 'gray-matter';

import { MetadatObj } from '../types';

function parseMetadata(matterResult: matter.GrayMatterFile<string>, filepath: string): MetadatObj {
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
  };
}

export default parseMetadata;
