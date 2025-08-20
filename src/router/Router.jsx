import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import TarotDetail from "../pages/TarotDetail";
import ThrowTarot from "../pages/ThrowTarot";


function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            🔮 Tarot 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Cartas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/throw">
                  Echar las cartas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}


const RouterTarot = createBrowserRouter([{
path:"/",
element: <Layout/>,
children: [
    {
        index: true,
        element:<Home/>,
    },
    {
        path: "Cartas",
        element: <TarotCards/>
    },
    {
        path: "/cartas/:id",
        element: <TarotDetail/>
    },
    {
        path:"/tirada",
        element: <ThrowTarot/>
    }

]

}])
export default RouterTarot;