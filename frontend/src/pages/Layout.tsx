import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Tags from "@/components/post/Tags";
import "@/css/Layout.css";
import Menu from "../components/Menu";

function Layout() {
  const location = useLocation();
  const menuHideOptions =
    location.pathname.startsWith("/write") ||
    location.pathname.startsWith("/edit");
  const tagsHideOptions =
    menuHideOptions ||
    location.pathname.startsWith("/introduce") ||
    location.pathname.startsWith("/project");

  return (
    <div className="container">
      <Header />
      {!menuHideOptions && <Menu />}
      <div className="body">
        {!tagsHideOptions && <Tags />}
        <div className="contents-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
