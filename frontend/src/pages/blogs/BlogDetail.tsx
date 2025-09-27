import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "../../data/blogs";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === slug);

  // scroll lên đầu khi đổi bài
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 text-zinc-300">
        <p>Post not found.</p>
        <Link to="/blog" className="text-emerald-400">
          ← Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <div className="space-y-2 mb-6">
        <div className="text-sm text-zinc-400">
          {new Date(post.date).toLocaleDateString()} • {post.author}
        </div>
        <h1 className="text-3xl font-bold text-white">{post.title}</h1>
        <div className="text-zinc-400 text-sm">{post.tags?.join(" • ")}</div>
      </div>

      {post.cover && (
        <div className="mb-8 overflow-hidden rounded-xl">
          <img src={post.cover} alt={post.title} className="w-full h-auto" />
        </div>
      )}

      <div className="text-justify prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-10">
        <Link to="/blogs" className="text-emerald-400">
          ← Back to all articles
        </Link>
      </div>
    </article>
  );
};

export default BlogDetail;
