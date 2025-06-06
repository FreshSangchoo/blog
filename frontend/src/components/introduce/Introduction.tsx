import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Stack from "./Stack";
import "@/css/Introduction.css";

function Introduction() {
  return (
    <div className="introduction-container">
      <AboutMe />
      <Stack />
      <Experience />
    </div>
  );
}

export default Introduction;
