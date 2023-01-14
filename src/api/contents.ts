import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import type { ArticleMetadata } from "~/domain/Article";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const contentsArticleDir = path.resolve(dirname, "../contents", "articles");

export const getContentsArticleFiles = async () => {
  const files = await fs.readdir(contentsArticleDir);
  return files;
};

export const getContentsArticleList = async (): Promise<
  Content<ArticleMetadata>[]
> => {
  const files = await getContentsArticleFiles();

  return files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter.read(
      path.resolve(contentsArticleDir, fileName),
      {}
    );

    // TEMP
    data.date = data.date.toISOString();

    return {
      slug,
      data: data as ArticleMetadata,
      content,
    };
  });
};

export const getContentsArticle = async (
  slug: string
): Promise<Content<ArticleMetadata>> => {
  const { data, content } = matter.read(
    path.resolve(contentsArticleDir, `${slug}.md`),
    {}
  );

  // TEMP
  data.date = data.date.toISOString();

  return {
    slug,
    data: data as ArticleMetadata,
    content,
  };
};

// ------------------------------------------

export type Content<Metadata> = {
  slug: string;
  data: Metadata;
  content: string;
};
