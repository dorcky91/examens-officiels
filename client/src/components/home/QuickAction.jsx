import { Link } from "react-router-dom";

export default function QuickAction() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-30 text-center space-y-4">
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
        <h2 className="text-2xl font-bold text-gray-800 -mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse.
        </h2>
        <Link
          to="/neuvieme"
          className="bg-blue-600 hover:bg-blue-800 hover:shadow text-white px-4 py-3 rounded hover:scale-105 transition-transform duration-500 inline-block">
          Learn more 👉
        </Link>
      </div>
    </section>
  );
}
