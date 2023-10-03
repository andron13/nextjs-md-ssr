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
    author: matterResult.data.author,
    category: matterResult.data.category || '',
    weight: matterResult.data.weight || 100,
    slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
  };
}

export default parseMetadata;
