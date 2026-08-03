import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaCloud, FaMobileAlt } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-indigo-600" />,
      title: "Web Development",
      description:
        "Modern, scalable and responsive web applications built with the latest technologies.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-indigo-600" />,
      title: "Mobile Apps",
      description:
        "Beautiful cross-platform mobile applications that deliver amazing user experiences.",
    },
    {
      icon: <FaCloud className="text-4xl text-indigo-600" />,
      title: "Cloud Solutions",
      description:
        "Secure cloud infrastructure that helps businesses grow with confidence.",
    },
  ];

  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
            Welcome to TechNova 🚀
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            Building Digital Products
            <span className="text-indigo-600"> That Inspire.</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We help businesses create modern websites, mobile applications,
            and digital experiences that leave lasting impressions.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/services"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
            alt="Technology"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Features */}
      <section>

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We combine creativity, innovation and technology to deliver
          world-class digital solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-indigo-600 rounded-3xl text-white p-12 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Build Something Amazing?
        </h2>

        <p className="mt-5 text-indigo-100">
          Let's work together to transform your ideas into reality.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg mt-8 hover:scale-105 transition"
        >
          Get Started
          <FaArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default Home;