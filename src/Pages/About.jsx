const About = () => {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-gray-900">
        About <span className="text-indigo-600">TechNova</span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        TechNova is a modern technology company passionate about building
        innovative digital solutions. We specialize in web development,
        mobile applications, and cloud technologies that help businesses
        grow in today's digital world.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="font-bold text-xl">🚀 Mission</h3>
          <p className="mt-3 text-gray-600">
            Deliver world-class digital experiences.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="font-bold text-xl">🌍 Vision</h3>
          <p className="mt-3 text-gray-600">
            Empower businesses through technology.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="font-bold text-xl">💡 Values</h3>
          <p className="mt-3 text-gray-600">
            Innovation, integrity and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;