import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mx-auto relative px-6 lg:px-8">
      <h1 class="text-4xl font-bold tracking-tight">march-am site</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">The music reviews</p>

      <Link
        class="rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
        href="/article/"
      >
        See all articles
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "march-am site",
  meta: [
    {
      name: "description",
      content: "march-am site",
    },
  ],
};
