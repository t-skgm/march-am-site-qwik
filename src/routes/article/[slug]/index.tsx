import { component$ } from "@builder.io/qwik";
import type { StaticGenerateHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { getArticles } from "~/stubSlugs";

export default component$(() => {
  const location = useLocation();
  const slug = location.params.slug;
  const title = location.params.title;

  return (
    <div>
      <h1>
        {title ?? "?"} ({slug})
      </h1>
    </div>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const articles = await getArticles();

  return {
    params: articles?.map(({ slug, title }) => {
      return { slug, title };
    }),
  };
};
