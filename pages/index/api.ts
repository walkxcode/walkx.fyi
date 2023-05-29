export interface PostMeta {
  id: string;
  title: string;
  url: string;
  published_at: string;
}

export function getLatestPosts(): Promise<PostMeta[]> {
  const apiUrl = `https://library.walkx.fyi/ghost/api/v3/content/posts/?key=${
    import.meta.env.VITE_GHOST_CONTENT_APIKEY
  }&limit=5&fields=id,title,url,published_at`;
  return fetch(apiUrl).then(async (res) => {
    const result = await res.json();
    return result.posts;
  });
}
