import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { generateHydrationScript, renderToString } from "solid-js/web";

import { PageContext } from "./types";

const passToClient = ["pageProps", "documentProps"];

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(() => <Page {...pageProps} />);

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Walkx - Home";
  const description = (documentProps && documentProps.description) || "Hey, I'm Walkx. A tech enthusiast from the Netherlands.";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="UTF-8" />
        <meta name="title" content="${title}" />
        <meta name="description" content="${description}" />
        <meta name="keywords" content="Walkx, walkxcode, walkx.fyi, walkx.org, walkyltd.xyz, Walker21390, Walker, Walkx Shoes, Coding, Tech Enthusiast, GitHub, Dashboard Icons, Uw Computerstudent, Digigem, Archiveteam ARM, Archiveteam, Winnie the Pooh, Tech Walkx, Walkx Organization, Coding Shoes, Tech Coding, Coding Enthusiast, Software Development, Web Development, Computer Science, Programming, Developer, GitHub Repository, Technology, Software Engineering" />
        <meta name="author" content="Bjorn Lammers" />
        <meta property="og:title" content="{title}" />
        <meta property="og:image" content="https://walkx.fyi/avatar.png" />
        <meta property="og:description" content="${description}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@walkxtweet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://walkx.fyi" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&f[]=cabinet-grotesk@1&display=swap" rel="stylesheet">
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { render, passToClient };
