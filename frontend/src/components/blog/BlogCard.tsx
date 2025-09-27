// src/components/blog/BlogCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { Blog } from "../../data/blogs";

type Props = { post: Blog };

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#171717] hover:border-zinc-700 transition">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </div>

        <div className="p-4 space-y-2">
          <div className="text-xs text-zinc-400">
            {new Date(post.date).toLocaleDateString()}
            {post.tags.length > 0 && (
              <span className="ml-2 text-zinc-500">
                • {post.tags.join(", ")}
              </span>
            )}
          </div>
          <h3 className="text-white font-semibold text-lg line-clamp-2">
            {post.title}
          </h3>
          <p className="text-zinc-300 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
