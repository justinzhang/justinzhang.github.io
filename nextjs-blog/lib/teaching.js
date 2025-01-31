import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from "remark-html";
import remarkMath from 'remark-math';
import remarkRehype from "remark-rehype"
import remarkParse from "remark-parse"
import rehypeStringify from "rehype-stringify"
import rehypeKatex from "rehype-katex"

const TeachingsDirectory = path.join(process.cwd(), 'teaching');

export  function titleToKatexs(title) {
  const processedContent =  remark()
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(title)
  const s = processedContent.toString();
  return s;
}

export function getSortedTeachingsData() {
  // Get file names under /Teachings
  const fileNames = fs.readdirSync(TeachingsDirectory);
  const allTeachingsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(TeachingsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the Teaching metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  console.log(allTeachingsData)
  // Sort Teachings by date
  return allTeachingsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}


export async function titleToKatex(title) {
  const processedContent = await remark()
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(title)
  const s = processedContent.toString();
  return s;
}



export function getAllTeachingIds() {
  const fileNames = fs.readdirSync(TeachingsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getTeachingData(id) {
  const fullPath = path.join(TeachingsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the Teaching metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();


  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}