import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Stack from "./Stack";

function Introduction() {
  return (
    <div className="introduction-container">
      소개글
      <AboutMe />
      <Stack />
      <Experience />
    </div>
  );
}

export default Introduction;
