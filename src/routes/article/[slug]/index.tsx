import { component$, Resource } from "@builder.io/qwik";
import type {
  RequestHandler,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import type { Content } from "~/api/contents";
import { getContentsArticle, getContentsArticleList } from "~/api/contents";
import type { ArticleMetadata } from "~/domain/Article";

type GetData = {
  article: Content<ArticleMetadata>;
};

export const onGet: RequestHandler<GetData> = async ({ params }) => {
  const slug = params.slug;
  const article = await getContentsArticle(slug);
  return { article };
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const articleItems = await getContentsArticleList();
  return {
    params: articleItems?.map(({ slug }) => ({ slug })),
  };
};

export default component$(() => {
  const location = useLocation();
  const slug = location.params.slug;
  const data = useEndpoint<GetData | undefined>();

  return (
    <div class="p-5">
      <Resource
        value={data}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => <Page data={data} slug={slug} />}
      />
    </div>
  );
});

export const Page = (props: { data: GetData | undefined; slug: string }) => {
  const article = props.data?.article;
  if (article == null) return null;

  return (
    <>
      <div class="p-4 my-1 rounded-md border-2 max-w-lg">
        <h1 class="text-xl font-bold mb-2">
          {article.data.title ?? "?"} ({props.slug})
        </h1>

        <div class="my-4">
          <div dangerouslySetInnerHTML={props.data?.article.content} />
        </div>

        <hr class="my-4" />

        <div>
          posted at{" "}
          {article.data.date && new Date(article.data.date).toISOString()}
        </div>
        <div>tags: {article.data.tags.join(", ")}</div>
      </div>

      <Link href="/article" class="underline">
        &lt; Back to index
      </Link>
    </>
  );
};
