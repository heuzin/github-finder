interface ImportMetaEnv {
  readonly VITE_GITHUB_URL: string;
  readonly VITE_GITHUB_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
