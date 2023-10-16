import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';
import { POSTS_FOLDER } from '../constants/webSiteVars';

export async function getAllPostSlugs() {
  const postsData = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    return parseMetadata(matterResult, filepath);
  });
  return postsData.map((res) => {
    return { slug: res?.slug };
  });
}

const postMetadata = async () => {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    return parseMetadata(matterResult, filepath);
  });
};

export default postMetadata;
