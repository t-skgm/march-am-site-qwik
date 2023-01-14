import { component$, Resource } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import type { Content } from "~/api/contents";
import { getContentsArticleList } from "~/api/contents";
import type { ArticleMetadata } from "~/domain/Article";

type GetData = {
  articles: Content<ArticleMetadata>[];
};

export const onGet: RequestHandler<GetData> = async () => {
  const articles = await getContentsArticleList();
  return {
    articles: articles.map((a) => ({
      content: a.content,
      data: a.data,
      slug: a.slug,
    })),
  };
};

export default component$(() => {
  const data = useEndpoint<GetData | undefined>();

  return (
    <div class="p-5">
      <h1 class="text-xl font-bold">Article: Index</h1>

      <Resource
        value={data}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => (
          <ul>
            {data?.articles.map(({ slug, data: { title, date, tags } }) => (
              <li>
                <Link
                  href={`/article/${slug}`}
                  class="block bg-slate-100 p-4 my-1 rounded-md border-2 max-w-sm"
                >
                  <div>
                    <span class="text-lg font-bold">{title}</span>
                  </div>
                  <div>posted at {new Date(date).toISOString()}</div>
                  <div>tags: {tags.join(", ")}</div>
                </Link>
              </li>
            )) ?? null}
          </ul>
        )}
      />
    </div>
  );
});
