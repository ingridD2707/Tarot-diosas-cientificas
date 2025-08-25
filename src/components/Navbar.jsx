import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-yellow-700/30 shadow-lg shadow-yellow-900/40">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="no-underline text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-[0_0_10px_rgba(250,204,21,0.7)] hover:text-yellow-300 transition"
        >
          🔮 Tarot
        </Link>

        {/* Links */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline relative transition-all duration-300 hover:text-yellow-300 ${
                isActive
                  ? "text-yellow-400 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                  : "text-gray-300"
              }`
            }
          >
            🃏 Cartas
          </NavLink>

          <NavLink
            to="/throw"
            className={({ isActive }) =>
              `no-underline relative transition-all duration-300 hover:text-yellow-300 ${
                isActive
                  ? "text-yellow-400 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                  : "text-gray-300"
              }`
            }
          >
            ✨ Tirada
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
