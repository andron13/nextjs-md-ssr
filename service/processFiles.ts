import fs from 'fs';

import matter from 'gray-matter';

import getAllFilesRecursively from './fileHelpers';
import { MetadatObj } from '../types';

type test =
  | {
      [key: string]: string | Partial<MetadatObj>;
    }[]
  | undefined[];

const processFiles = async (
  folder: string,
  callback: (
    matterResult: matter.GrayMatterFile<string>,
    filepath: string
  ) => { [key: string]: string | Partial<MetadatObj> } | undefined
) => {
  const filePaths = getAllFilesRecursively(folder);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
