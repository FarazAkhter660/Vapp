import { treaty } from "@elysiajs/eden";

interface ImportMetaEnv {
  VITE_API_ENDPOINT?: string;
}

declare global {
  // No need to redeclare ImportMeta, Vite already provides it.
}

const API_ENDPOINT =
  import.meta.env.VITE_API_ENDPOINT ?? "https://workers.vera.sc";

const EdenClient = treaty(API_ENDPOINT, {
  fetch: {
    credentials: "include",
  },
});

export default EdenClient;
