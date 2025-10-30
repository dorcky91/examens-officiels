export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <span>© 2025 Exámenes Oficiales. Todos los derechos reservados.</span>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Soporte
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
