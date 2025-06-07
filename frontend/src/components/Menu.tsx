import "@/css/Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigation = useNavigate();
  return (
    <div className="menu-container">
      <div className="menu-item" onClick={() => navigation("/introduce")}>
        🖐 소개
      </div>
      <div className="menu-item" onClick={() => navigation("/list")}>
        📃 게시글
      </div>
      <div className="menu-item" onClick={() => navigation("/project")}>
        📁 프로젝트
      </div>
    </div>
  );
}

export default Menu;
