import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Article: Indrx</h1>
      <ul>
        {pagesList.map(({ slug, title }) => (
          <li>
            <Link href={`/article/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export const pagesList = [
  {
    slug: "slug1",
    title: "page 1",
  },
  {
    slug: "slug2",
    title: "page 2",
  },
];
