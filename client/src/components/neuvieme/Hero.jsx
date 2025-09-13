export default function Hero({ classe }) {
  return (
    <header className="h-[15rem] bg-gray-200 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{classe.nom}</div>
    </header>
  );
}
