import "@/css/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container" onClick={() => navigate("/")}>
      FreshSangchoo's 블로그
    </div>
  );
}

export default Header;
