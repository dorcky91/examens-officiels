export default function WhyUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4 lg:pr-20 text-center max-w-xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Why learn with us?
          </h2>
          <p className="text-gray-600 -mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            doloremque.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#f94f10" }}>
            <div>
              <p className="text-2xl">💡</p>
              <h4 className="font-semibold">
                Our content will help you to learn faster.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              delectus?
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 hover:scale-105 transition-transform duration-300 hover:rotate-1 hover:shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1683195785758-9906a4ccf554?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ height: "340px" }}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#3974ff" }}>
            <div>
              <p className="text-2xl">📅</p>
              <h4 className="font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              delectus?
            </p>
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#c9bcab" }}>
            <div>
              <p className="text-2xl">🔒</p>
              <h4 className="font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Secured the process of maintaining every exam and its results.
            </p>
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#4c1526" }}>
            <div>
              <p className="text-2xl">📂</p>
              <h4 className="font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              delectus?
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 rounded-lg order-1 lg:order-none hover:scale-105 transition-transform duration-300 hover:-rotate-1 hover:shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1683195785758-9906a4ccf554?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ height: "340px" }}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
