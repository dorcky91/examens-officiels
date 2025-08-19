import { Link } from "react-router-dom";

export default function Neuvieme() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="grid grid-cols-12 items-center gap-10 bg-white rounded-lg px-10 py-20">
        <div className="col-span-12 lg:col-span-6 relative z-10 hover:scale-105 transition-transform duration-300 hover:-rotate-1">
          <img
            src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Description"
            style={{ height: "450px" }}
            className="w-full object-cover rounded-lg"
          />
          <div
            className="absolute inset-0 bg-white rounded-lg scale-105 shadow-2xl rotate-1"
            style={{ zIndex: "-1" }}></div>
          <div
            className="absolute inset-0 bg-white rounded-lg scale-105 shadow-2xl -rotate-1"
            style={{ zIndex: "-1" }}></div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse.
          </h2>
          <p className="text-gray-600 -mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            doloremque.
          </p>
          <Link
            to="/neuvieme"
            className="bg-blue-600 hover:bg-blue-800 hover:shadow text-white px-4 py-3 rounded hover:scale-105 transition-transform duration-500 inline-block">
            Learn more 👉
          </Link>
        </div>
      </div>
    </section>
  );
}
