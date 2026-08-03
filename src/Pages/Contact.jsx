const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-center">
        Contact Us
      </h1>

      <form className="mt-12 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg p-4"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-lg p-4"
        ></textarea>

        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;