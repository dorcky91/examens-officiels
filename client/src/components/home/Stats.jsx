export default function Stats() {
  return (
    <section className="py-20 bg-blue-700 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-10 justify-center text-center divide-y-1 sm:divide-y-0 lg:divide-x-1 divide-gray-100">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-gray-50/75">
            <span className="text-5xl font-bold text-white">200+</span>
            <p>Examens</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-gray-50/75">
            <span className="text-5xl font-bold text-white">200+</span>
            <p>Certificats</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-gray-50/75">
            <span className="text-5xl font-bold text-white">300+</span>
            <p>Formations</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-gray-50/75">
            <span className="text-5xl font-bold text-white">400+</span>
            <p>Certificats</p>
          </div>
        </div>
      </div>
    </section>
  );
}
