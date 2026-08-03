import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { id } = useParams();

  return (
    <section className="max-w-3xl mx-auto py-16">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

        <FaUserCircle className="text-7xl text-indigo-600 mx-auto" />

        <h1 className="mt-6 text-4xl font-bold">
          User Profile
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Welcome to the profile page.
        </p>

        <div className="mt-8 bg-indigo-50 rounded-xl p-6">
          <p className="text-xl">
            User ID:
            <span className="font-bold text-indigo-600 ml-2">
              {id}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;