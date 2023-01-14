import { cloudflarePagesAdaptor } from "@builder.io/qwik-city/adaptors/cloudflare-pages/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],

        // add node modules to blacklist (as external module).
        // https://github.com/BuilderIO/qwik/issues/704
        external(source, _importer, _isResolved): boolean | void {
          if (["fs/promises", "path", "url"].indexOf(source) != -1) return true;
        },
      },
    },
    plugins: [cloudflarePagesAdaptor()],
  };
});
