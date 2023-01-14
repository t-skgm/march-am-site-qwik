import { describe, expect, test } from "vitest";
import { getContentsArticleFiles, getContentsArticleList } from "./contents";

describe("contents", () => {
  test("getContentsArticleFiles()", async () => {
    const result = await getContentsArticleFiles();
    expect(result).toEqual(["2023-01-14-test2.mdx"]);
  });

  test("getContentsArticleList()", async () => {
    const result = await getContentsArticleList();
    expect(result).toEqual([
      {
        content: `
This is a <strong>Test</strong>.
`,
        data: {
          categories: "",
          date: "2023-01-14T10:04:01.863Z",
          description: "",
          draft: true,
          preview: "",
          tags: ["tag1", "tag2"],
          title: "test",
        },
        slug: "2023-01-14-test2.mdx",
      },
    ]);
  });
});
