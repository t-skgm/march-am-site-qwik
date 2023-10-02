import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return null;
  // return (
  //   <header>
  //     <ul>
  //       <li>
  //         <a
  //           href="https://qwik.builder.io/docs/components/overview/"
  //           target="_blank"
  //         >
  //           Docs
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://qwik.builder.io/examples/introduction/hello-world/"
  //           target="_blank"
  //         >
  //           Examples
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://qwik.builder.io/tutorial/welcome/overview/"
  //           target="_blank"
  //         >
  //           Tutorials
  //         </a>
  //       </li>
  //     </ul>
  //   </header>
  // );
});
