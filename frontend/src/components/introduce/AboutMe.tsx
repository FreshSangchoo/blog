import profile from "@/assets/images/profile.jpg";
import communication from "@/assets/images/communication.png";
import smile from "@/assets/images/smiling.png";
import passion from "@/assets/images/passion.png";
import "@/css/introduce/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="introduce-me-container">
        <img src={profile} alt="profileImage" className="profile-image" />
        <div className="profile-introduction">
          <div className="name-text">박영남 | Service Developer</div>
          <div className="about-me-description">
            많은 사람들에게 도움이 되는 유용한 서비스를 직접 만들어보고 싶다는
            마음에서 개발을 시작하게 되었습니다. <br />
            완벽하게 해내고 싶은 성향 덕분에 작은 세부 사항까지 놓치지 않으려
            노력합니다. 때로는 시간이 걸리기도 하지만, 그만큼 만족스러운 결과를
            만들어냅니다. <br />
            React와 React Native를 중심으로 웹과 모바일 서비스 위주의 개발을
            해왔고, 프로젝트 전반에서 기획부터 배포까지의 과정을 모두
            경험했습니다. 현재는 시스템 보안 자동화 프로젝트를 수행하며 보안
            관점도 확장하고 있습니다. <br />
            새로운 기술이나 도구를 익히는 데 거부감이 없으며, 필요하다고
            판단되면 빠르게 학습하고 적용해 문제를 해결합니다.
            <br />
            앞으로도 기술과 보안을 함께 이해하는 서비스 개발자로서 신뢰할 수
            있는 시스템을 만드는데 기여하고 싶습니다.
          </div>
        </div>
      </div>
      <div className="title-container-text">ABOUT ME</div>
      <div className="about-me-keyword-container">
        <div className="keyword-card">
          <img
            src={communication}
            alt="communicationImage"
            className="keyword-image"
          />
          <div className="keyword-title">명확한 의사소통</div>
          <div className="keyword-description">
            명확한 의사소통을 바탕으로 <br />
            정확한 결과물 완성
          </div>
        </div>
        <div className="keyword-card">
          <img src={smile} alt="smileImage" className="keyword-image" />
          <div className="keyword-title">긍정적 사고</div>
          <div className="keyword-description">
            언제나 긍정적인 태도로
            <br />
            협업 분위기 주도
          </div>
        </div>
        <div className="keyword-card">
          <img src={passion} alt="passionImage" className="keyword-image" />
          <div className="keyword-title">완벽을 향한 끈기</div>
          <div className="keyword-description">
            완벽하게 해내기 위한
            <br />
            끈기와 열정
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
