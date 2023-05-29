import { Component } from "solid-js"; // eslint-disable-line
import type { PageContextBuiltIn } from "vite-plugin-ssr";

export type PageProps = object;

export type DocumentProps = {
  title?: string;
  description?: string;
};

export type PageContext = PageContextBuiltIn & {
  Page: (pageProps: PageProps) => Component;
  pageProps: PageProps;
  exports: {
    documentProps?: DocumentProps;
  };
};
