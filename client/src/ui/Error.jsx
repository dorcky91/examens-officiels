export default function Error({ title, message }) {
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
