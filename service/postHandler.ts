import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';
import { POSTS_FOLDER } from '../constants/webSiteVars';
import { resultObj, postData } from '../types';

export async function getAllPostsData() {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { content: matterResult.content, ...postMetadata };
  });
}

type test = (slug: string) => postData;

export const getPostData = async (slug: string) => {
  const matchingPosts: postData[] = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    if (postMetadata.slug === slug) {
      return { content: matterResult.content, postMetadata };
    } else {
      return { content: 'content', postMetadata };
    }
  });

  const filteredPosts = matchingPosts.filter((post) => post.content !== 'content');

  if (filteredPosts.length) {
    return filteredPosts[0];
  }

  throw new Error(`Post with slug "${slug}" not found.`);
};
