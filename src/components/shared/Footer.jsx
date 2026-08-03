import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            TechNova
          </h2>

          <p className="mt-2 text-sm">
            Building modern digital experiences with React.
          </p>
        </div>

        <div className="flex gap-5 text-2xl">
          <a href="#" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-indigo-400 transition">
            <FaTwitter />
          </a>
        </div>

      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;