import { component$, Resource } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { getArticles } from "~/stubSlugs";

type Article = {
  slug: string;
  title: string;
};

type GetData = {
  articles: Article[];
};

export const onGet: RequestHandler<GetData> = async () => {
  const articles = await getArticles();
  return {
    articles,
  };
};

export default component$(() => {
  const data = useEndpoint<GetData | undefined>();

  return (
    <div>
      <h1>Article: Index</h1>

      <Resource
        value={data}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => (
          <ul>
            {data?.articles.map(({ slug, title }) => (
              <li>
                <Link href={`/article/${slug}`}>{title}</Link>
              </li>
            )) ?? null}
          </ul>
        )}
      />
    </div>
  );
});
