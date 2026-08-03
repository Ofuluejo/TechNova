const services = [
  {
    title: "Web Development",
    description: "Responsive websites built with React and modern technologies.",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful interfaces focused on user experience.",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps for Android and iOS.",
  },
  {
    title: "Cloud Solutions",
    description: "Secure cloud infrastructure and deployment.",
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <h1 className="text-5xl font-bold text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">
              {service.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;