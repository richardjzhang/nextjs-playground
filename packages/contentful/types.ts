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
    createdAt?: string;
  };
}

type BlogPosts = Array<BlogPost>;

interface RawBlogPost {
  fields: {
    title: string;
    slug: string;
    description: string;
    content: string;
  };

  sys: {
    id: string;
    createdAt: string;
  };
}

type RawBlogPosts = Array<RawBlogPost>;

export type { BlogPost, BlogPosts, RawBlogPosts, RawBlogPost };
