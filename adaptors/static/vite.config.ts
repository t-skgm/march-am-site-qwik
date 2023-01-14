import { staticAdaptor } from "@builder.io/qwik-city/adaptors/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

// FIXME: 環境変数使う
const SITE_ORIGIN = "https://march-am-site.pages.dev/";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdaptor({
        origin: SITE_ORIGIN,
      }),
    ],
  };
});
