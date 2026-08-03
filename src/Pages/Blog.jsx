const posts = [
  "Why React is the Future of Frontend",
  "Getting Started with Tailwind CSS",
  "Understanding React Router",
];

const Blog = () => {
  return (
    <section className="py-16">
      <h1 className="text-5xl font-bold">
        Latest Articles
      </h1>

      <div className="space-y-6 mt-12">
        {posts.map((post) => (
          <div
            key={post}
            className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">
              {post}
            </h2>

            <p className="mt-3 text-gray-600">
              Read more about this exciting topic...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;