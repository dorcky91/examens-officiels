export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 border-t border-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-12 text-center lg:text-left">
          <div className="col-span-12 lg:col-span-4">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p>Follow us on social media:</p>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p>Contact us:</p>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Email
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Phone
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
