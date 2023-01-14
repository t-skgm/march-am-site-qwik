import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <h1>Article: {location.params.id}</h1>
    </div>
  );
});
