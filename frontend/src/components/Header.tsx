import TextButton from "@/components/TextButton";
import "@/css/Header.css";
import {
  getStoredTheme,
  getSystemPrefersDark,
  toggleTheme,
} from "@/utils/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = getStoredTheme();
    return stored ? stored === "dark" : getSystemPrefersDark();
  });

  const changeMode = () => {
    const next = toggleTheme();
    setIsDark(next === "dark");
  };

  return (
    <div className="header-container">
      <div className="header-button-container">
        <div className="header-button-item" onClick={() => window.open("https://github.com/FreshSangchoo", "_blank")}>
          GitHub
        </div>
        <div className="header-button-item" onClick={() => window.open("https://velog.io/@aprldpdy289/posts", "_blank")}>
          기술 블로그
        </div>
        <TextButton
          text={`${isDark ? "☀️" : "🌙"}`}
          onClick={changeMode}
          bold
          size={24}
          title={isDark ? "라이트 모드" : "다크 모드"}
        />
      </div>
      <div className="header-signboard-container" onClick={() => navigate("/")}>
        "HELLO WORLD!"
      </div>
    </div>
  );
}

export default Header;
