interface BlogPost {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description: string;

  /** Content */
  content: string;

  sys: {
    id: string;
    firstPublishedAt: string;
  };
}

type BlogPosts = Array<BlogPost>;

export type { BlogPost, BlogPosts };
