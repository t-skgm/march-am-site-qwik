export type ArticleMetadata = {
  categories: string;
  date: DateString;
  description: string;
  draft: boolean;
  preview: string;
  tags: string[];
  title: string;
};

export type DateString = string;
