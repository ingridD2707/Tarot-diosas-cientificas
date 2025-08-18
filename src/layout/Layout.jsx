import { Outlet } from "react-router-dom";
import SiteNavbar from "../components/Navbar";


export default function Layout() {
  return (
    <>
      <SiteNavbar />
      <main className="container py-3">
        <Outlet />
      </main>
    </>
  );
}
