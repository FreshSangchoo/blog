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
          <div className="name-text">박영남 | Frontend Developer</div>
          <div className="about-me-description">
            많은 사람들에게 도움이 되는 유용한 앱을 직접 만들어보고 싶다는
            마음에서 개발을 시작하게 되었습니다. <br />
            아이디어를 떠올리고, 그 아이디어를 실제로 구현해나가는 과정에 큰
            즐거움을 느끼고 있습니다. 또한 사용자에게 더 나은 경험을 제공하기
            위해 화면 구성과 흐름을 고민하는 일에 재미를 느껴, 자연스럽게
            프론트엔드 개발에 흥미를 갖게 되었습니다. <br />
            React와 React Native를 중심으로 프로젝트를 진행해왔고, 새로운
            기술이나 도구를 빠르게 익히고 적용하는 데 익숙합니다. <br />
            앞으로도 계속해서 사람들에게 도움이 되는 서비스를 만들기 위해
            배우고, 고민하고, 만들어가고자 합니다.
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
          <div className="keyword-title">한결같은 열정</div>
          <div className="keyword-description">
            포기하지않고
            <br />
            끝까지 해내는 끈기와 열정
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
