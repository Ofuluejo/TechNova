import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">

        <FaExclamationTriangle className="text-7xl text-red-500 mx-auto" />

        <h1 className="mt-6 text-6xl font-extrabold text-gray-900">
          404
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          <FaHome />
          Back Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;