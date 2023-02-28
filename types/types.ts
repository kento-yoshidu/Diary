export type Post = {
  title: string,
  slug: string,
  eyecatch: {
    url: string,
    height: number,
    width: number,
    blurDataURL?: string
  }
}

export type Category = {
  id: string,
  createdAt: string
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string,
  slug: string,
}
