export default function Footer() {
  return (
    <footer className="mt-3">
      <div className="w-screen max-w-full mx-auto px-3">
        <div className="bg-gray-800 py-20 border-t border-gray-600 text-white">
          <div className="px-6 lg:px-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-center lg:text-left">
              <div className="lg:col-span-4">
                <p>
                  &copy; {new Date().getFullYear()} Arche. Tous droits réservés.
                </p>
              </div>
              <div className="lg:col-span-4">
                <p>Suivez-nous sur les réseaux sociaux :</p>
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
              <div className="lg:col-span-4">
                <p>Contactez-nous :</p>
                <div>
                  <a href="#" className="text-gray-400 hover:text-white">
                    lorem@example.com
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Téléphone : (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
