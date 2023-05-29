import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { generateHydrationScript, renderToString } from "solid-js/web";

import { PageContext } from "./types";

const passToClient = ["pageProps", "documentProps"];

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(() => <Page {...pageProps} />);

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Walkx";
  const description = (documentProps && documentProps.description) || "Walkx, tech enthusiast.";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="Walkx" />
        <meta property="og:title" content="Walkx" />
        <meta property="og:image" content="https://walkx.fyi/avatar.png" />
        <meta property="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@walkxtweet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://walkx.fyi" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&f[]=cabinet-grotesk@1&display=swap" rel="stylesheet">
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { render, passToClient };
