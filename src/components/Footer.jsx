export default function Footer() {
  return (
    <footer className="mt-10 py-6 bg-gradient-to-t from-black via-gray-900 to-black text-yellow-200 border-t border-yellow-700 shadow-yellow-800/50">
      <div className="container text-center">
        <p className="mb-1 text-yellow-300 font-semibold">
          © {new Date().getFullYear()} PROYECTO
        </p>
        <small className="text-yellow-400">
          INGRID MARTINEZ FACTORIA-F5
        </small>
      </div>
    </footer>
  );
}
