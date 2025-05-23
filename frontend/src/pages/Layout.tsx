import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Tags from "../components/Tags";
import "@/css/Layout.css";
import Menu from "../components/Menu";

function Layout() {
  const location = useLocation();
  const hideOptions =
    location.pathname.startsWith("/write") ||
    location.pathname.startsWith("/edit");

  return (
    <div className="container">
      <Header />
      {!hideOptions && <Menu />}
      <div className="body">
        {!hideOptions && <Tags />}
        <div className="contents-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
