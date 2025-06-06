import "@/css/introduce/Stack.css";
import reactIcon from "@/assets/images/skills/react.png";
import typescriptIcon from "@/assets/images/skills/typescript.png";
import javascriptIcon from "@/assets/images/skills/javascript.png";
import zustandIcon from "@/assets/images/skills/zustand.png";
import kotlinIcon from "@/assets/images/skills/kotlin.png";

function Stack() {
  return (
    <div className="stack-container">
      <div className="title-container-text">TECHNICAL STACK</div>
      <div className="stack-card-container">
        <div className="stack-card">
          <div className="skill-type-container">
            <img src={reactIcon} className="skill-type-image" />
            <div className="skill-type">React</div>
            <div className="skill-proficiency">★★★★☆</div>
          </div>
          <div className="skill-description">
            대규모 컴포넌트 구조 설계와 상태 관리를 통한 사용자 중심의 UI 구현
          </div>
        </div>
        <div className="stack-card">
          <div className="skill-type-container">
            <img src={reactIcon} className="skill-type-image" />
            <div className="skill-type">
              React
              <br />
              Native
            </div>
            <div className="skill-proficiency">★★★★☆</div>
          </div>
          <div className="skill-description">
            모바일 화면을 고려한 크로스 플랫폼 앱 개발
          </div>
        </div>
        <div className="stack-card">
          <div className="skill-type-container">
            <img src={typescriptIcon} className="skill-type-image" />
            <div className="skill-type">Typescript</div>
            <div className="skill-proficiency">★★★☆☆</div>
          </div>
          <div className="skill-description">
            Typescript를 활용한 안정적인 코드 작성
          </div>
        </div>
        <div className="stack-card">
          <div className="skill-type-container">
            <img src={javascriptIcon} className="skill-type-image" />
            <div className="skill-type">Javascript</div>
            <div className="skill-proficiency">★★★☆☆</div>
          </div>
          <div className="skill-description">
            웹 상호작용 구현 및 API 연동 등의 로직 작성
          </div>
        </div>
        <div className="stack-card">
          <div className="skill-type-container">
            <img
              src={zustandIcon}
              className="skill-type-image"
              style={{ borderRadius: "50%" }}
            />
            <div className="skill-type">Zustand</div>
            <div className="skill-proficiency">★★★☆☆</div>
          </div>
          <div className="skill-description">
            간결한 전역 상태 관리로 다양한 화면 간 데이터 공유 구현
          </div>
        </div>
        <div className="stack-card">
          <div className="skill-type-container">
            <img src={kotlinIcon} className="skill-type-image" />
            <div className="skill-type">Kotlin</div>
            <div className="skill-proficiency">★★☆☆☆</div>
          </div>
          <div className="skill-description">
            Jetpack Compose로 UI 화면 구성 및 동작 구현
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
