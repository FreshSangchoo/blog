import "@/css/project/ProjectDetail.css";

import akifyThumbnail from "@/assets/images/project/akify/akify.png";
import akifySocialLogin from "@/assets/images/project/akify/akifySocialLogin.gif";
import akifySocialSignup from "@/assets/images/project/akify/akifySocialSignup.gif";
import akifyHome from "@/assets/images/project/akify/akifyHome.gif";
import akifyUpload from "@/assets/images/project/akify/akifyUpload.mp4";
import akifyExplorePage from "@/assets/images/project/akify/akifyExplorePage.gif";
import akifySearch from "@/assets/images/project/akify/akifySearch.gif";
import akifyChatting from "@/assets/images/project/akify/akifyChatting.mp4";
import akifyMyPage from "@/assets/images/project/akify/akifyMyPage.gif";

function Akify() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">아키파이</div>
        <div className="project-summary">중고 악기 거래 플랫폼</div>
      </div>

      <img
        className="project-detail-image"
        src={akifyThumbnail}
        alt="Akify 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 4명, backend 2명, 디자이너 2명
          <br />
          2025.07 ~ 현재 (지속 업데이트 중)
        </div>

        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          아키파이는 악기 사용자들을 위한 중고 거래 앱으로, 사용자가 악기를
          손쉽게 검색하고, 상세 정보와 조건을 입력해 매물을 등록하고, 다른
          사용자와 채팅을 통해 거래할 수 있도록 합니다. 실시간 알림, 신뢰 기반
          매물 시스템, 선택적 인증 등의 기능을 제공합니다.
        </div>

        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>악기 검색 및 필터링</li>
          <li>매물 등록 및 관리 (사진, 모델, 상태, 가격 등)</li>
          <li>채팅 기능 (TalkPlus 연동)</li>
          <li>푸시 알림</li>
          <li>사용자 로그인/회원가입 (이메일, SNS)</li>
          <li>iOS/Android 크로스 플랫폼 대응</li>
        </ul>

        <div className="title-text">기술 스택</div>
        <ul className="contents-text">
          <li>Frontend: React Native, TypeScript, Zustand</li>
          <li>Backend: Spring Boot, PostgreSQL</li>
          <li>기타: Firebase, TalkPlus, Danal 본인인증</li>
        </ul>

        <div className="title-text">관련 링크</div>
        <ul className="contents-text">
          <li>
            <a
              href="https://akify.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              아키파이 홈페이지
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.jammering.akify&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android - v1.0.15
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/kr/app/%EC%95%84%ED%82%A4%ED%8C%8C%EC%9D%B4/id6751454780"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS - v1.0.10
            </a>
          </li>
        </ul>

        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container">
            <img src={akifySocialSignup} alt="소셜 회원가입" />
            <div className="description-screenshot">
              <div className="screenshot-title">소셜 회원가입</div>
              <div className="description-text">
                카카오톡 회원가입 과정입니다.
              </div>
            </div>
          </div>

          <div className="screenshot-container">
            <img src={akifySocialLogin} alt="소셜로그인" />
            <div className="description-screenshot">
              <div className="screenshot-title">소셜로그인</div>
              <div className="description-text">
                카카오톡 로그인 과정입니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={akifyHome} alt="홈 화면" />
            <div className="description-screenshot">
              <div className="screenshot-title">홈 화면</div>
              <div className="description-text">
                아키파이 첫 진입시 보이는 홈 화면입니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <video
              src={akifyUpload}
              autoPlay
              loop
              muted
              playsInline
              className="project-detail-video"
            />
            <div className="description-screenshot">
              <div className="screenshot-title">매물 등록</div>
              <div className="description-text">
                사용자들이 매물을 등록하는 과정입니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={akifyExplorePage} alt="둘러보기" />
            <div className="description-screenshot">
              <div className="screenshot-title">둘러보기</div>
              <div className="description-text">
                사용자들이 등록한 매물들을 둘러볼 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={akifySearch} alt="매물 검색" />
            <div className="description-screenshot">
              <div className="screenshot-title">매물 검색</div>
              <div className="description-text">
                사용자들이 등록한 매물을 이펙터 종류별로 검색할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <video
              src={akifyChatting}
              autoPlay
              loop
              muted
              playsInline
              className="project-detail-video"
            />
            <div className="description-screenshot">
              <div className="screenshot-title">채팅</div>
              <div className="description-text">
                사용자들이 등록한 매물을 통하여 거래를 위한 채팅을 할 수
                있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={akifyMyPage} alt="마이페이지" />
            <div className="description-screenshot">
              <div className="screenshot-title">마이페이지</div>
              <div className="description-text">
                사용자의 정보를 관리하는 페이지입니다.
              </div>
            </div>
          </div>
        </div>

        <div className="title-text">담당 역할</div>
        <div>Frontend 개발 리드</div>
        <ul className="contents-text">
          <li>본인인증 기능 구현 (Danal 연동)</li>
          <li>채널톡 고객 지원 시스템 통합</li>
          <li>1:1 채팅 기능 구현 (TalkPlus 연동)</li>
          <li>마이페이지 화면 개발 및 사용자 정보 관리</li>
          <li>홈 화면 구현</li>
        </ul>

        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          실제 서비스를 배포하고 운영하면서 개발 단계에서는 미처 생각하지 못했던
          부분들을 경험할 수 있었습니다. iOS와 Android 양쪽 플랫폼 모두에
          대응하다 보니 라이브러리 선택과 네이티브 기능 연동에 제약이 있었고,
          이를 해결하는 과정에서 크로스 플랫폼 개발의 특성을 이해하게
          되었습니다.
          <br />
          <br />
          다날 본인인증, TalkPlus 채팅 등 외부 솔루션 업체와의 연동 작업을 통해
          실제 상용 서비스에서 사용되는 써드파티 SDK 통합 방법을 배울 수
          있었습니다. 또한 앱스토어 심사 과정을 직접 경험하며 배포 전
          체크리스트와 가이드라인 준수의 중요성을 체감했습니다.
          <br />
          <br />
          ✔️ <strong>아쉬웠던 점</strong>
          <br />
          디자이너와 협업한 첫 프로젝트였기에 디자인 시스템을 체계적으로
          적용하지 못한 점이 아쉬웠습니다. 프로젝트 초반에 컴포넌트 명세와
          재사용 기준을 명확히 정의했다면 중복 컴포넌트 발생을 줄일 수 있었을
          것입니다. 실제로 개발 후반부에 유사한 컴포넌트들을 통합하는 과정을
          거쳤는데, 초기 설계 단계에서 더 꼼꼼히 체크했다면 시간을 절약할 수
          있었을 것 같습니다.
          <br />
          <br />
          또한 예상치 못한 사용자 동작과 엣지 케이스에 대한 테스트가
          부족했습니다. 배포 후 사용자 피드백을 통해 발견된 오류들을 수정하며,
          출시 전 다양한 시나리오를 미리 검증하는 것의 중요성을 깨달았습니다.
          <br />
          <br />
          ✔️ <strong>개발 역량 및 새롭게 배운 기술</strong>
          <br />
          - React Native 기반 iOS/Android 크로스 플랫폼 대응
          <br />
          - 외부 솔루션(Danal, TalkPlus, Firebase) SDK 통합 및 연동
          <br />
          - 앱스토어(Google Play, App Store) 배포 프로세스 및 심사 대응
          <br />
          - 디자인 시스템 기반 컴포넌트 설계 및 재사용성 고려
          <br />
          - 실제 서비스 운영 및 버전 관리 경험
          <br />
          <br />
          ✔️ <strong>깨달은 점</strong>
          <br />
          실제 서비스를 운영하면서 사용자 피드백에 대한 빠른 대응이 얼마나
          중요한지 체감했습니다. 버그 리포트나 기능 개선 요청에 신속하게
          반응하고 업데이트를 배포하는 과정을 통해 사용자 중심의 서비스 운영
          마인드를 갖게 되었습니다.
          <br />
          <br />
          안정적인 서비스를 유지하기 위한 에러 핸들링, 예외 상황 처리, 성능
          모니터링의 중요성을 이해하게 되었습니다. 실제 사용자가 있는 서비스를
          운영한다는 것은 지속적인 개선과 책임감이 필요한 일임을 배웠습니다.
        </div>
      </div>
    </div>
  );
}

export default Akify;
