// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} PROYECTO </p>
        <small className="text-muted">Creado con React + Bootstrap</small>
      </div>
    </footer>
  );
}
