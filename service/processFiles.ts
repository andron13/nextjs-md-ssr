import fs from 'fs';

import matter from 'gray-matter';

import getAllFilesRecursively from './fileHelpers';
import { resultObj, postData } from '../types';

const processFiles = async (
  folder: string,
  callback: (
    matterResult: matter.GrayMatterFile<string>,
    filepath: string
  ) => Partial<resultObj> | postData
) => {
  const filePaths = getAllFilesRecursively(folder);
  const results: any[] = [];

  filePaths.forEach((filepath: string) => {
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const matterResult = matter(fileContents);
    const result = callback(matterResult, filepath);
    results.push(result);
  });

  return results;
};

export default processFiles;
