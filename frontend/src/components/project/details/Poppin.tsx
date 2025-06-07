import "@/css/project/ProjectDetail.css";
import poppinThumbnail from "@/assets/images/project/poppin/poppin.png";
import popupDetailGif from "@/assets/images/project/poppin/poppinPopupDetail.gif";
import reservationGif from "@/assets/images/project/poppin/poppinReservation.gif";
import registGif from "@/assets/images/project/poppin/poppinRegistPopup.gif";

function Poppin() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">팝핀 (Poppin)</div>
        <div className="project-summary">
          맞춤형 팝업스토어 추천 및 예약 플랫폼
        </div>
      </div>

      <img
        className="project-detail-image"
        src={poppinThumbnail}
        alt="Poppin 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 2명, backend 4명 (총 6명)
          <br />
          2024.07.02 ~ 2024.08.16 (총 7주)
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          팝핀은 팝업스토어 창업자와 사용자 간의 연결을 돕는 플랫폼으로,
          사용자의 취향과 위치 기반으로 맞춤형 팝업스토어를 추천하고, 실시간
          예약 및 소통이 가능한 기능을 제공합니다. 주요 기능으로는 랭킹 기반의
          스토어 탐색, 채팅 기능, 사전예약 및 현장예약 시스템이 있습니다.
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>개인 맞춤형 팝업스토어 추천</li>
          <li>조회수/좋아요/별점/예약 건수 기반 랭킹 시스템</li>
          <li>팝업스토어 상세 정보 조회 및 지도 기반 위치 탐색</li>
          <li>관리자용 팝업스토어 등록 시스템</li>
          <li>온라인 사전 예약 / 현장 예약 기능</li>
          <li>운영자와 실시간 채팅 기능 (웹소켓 기반)</li>
        </ul>
      </div>

      <div>
        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container">
            <img src={popupDetailGif} alt="팝업 상세 페이지 gif" />
            <div className="description-screenshot">
              <div className="screenshot-title">팝업스토어 상세 정보</div>
              <div className="description-text">
                팝업스토어에 대한 상세 정보를 확인할 수 있습니다.
                <br />
                해당 팝업스토어에 대한 채팅을 통해 팝업 운영 매니저, 팝업스토어
                이용자들과 실시간 소통을 진행할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={reservationGif} alt="예약 페이지 gif" />
            <div className="description-screenshot">
              <div className="screenshot-title">팝업스토어 예약</div>
              <div className="description-text">
                팝업스토어의 예약 정보를 확인하고 예약할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img src={registGif} alt="팝업 등록 페이지 gif" />
            <div className="description-screenshot">
              <div className="screenshot-title">팝업스토어 등록</div>
              <div className="description-text">
                팝업스토어 운영자는 팝업스토어를 등록할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>UI/UX 기획, Frontend</div>
        <ul className="contents-text">
          <li>Figma 기반 UI/UX 기획</li>
          <li>팝업스토어 상세 정보 페이지 구현</li>
          <li>API 연동을 통한 팝업스토어 등록/예약 기능 구현</li>
          <li>지도와 캘린더 구현을 통한 팝업스토어 조회 기능 구현</li>
          <li>웹소켓을 활용한 실시간 채팅 기능 구현</li>
          <li>반응형 웹 퍼블리싱 (모바일 중심)</li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          React, PWA, TypeScript, Zustand, Vite, CSS, WebSocket, Figma
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          프로젝트를 진행하며 UI/UX 흐름을 설계하고 실제로 구현하는 과정에서
          사용자 중심의 사고와 컴포넌트 재사용성의 중요성을 느꼈습니다.
          <br />
          <br />
          ✔️ <strong>아쉬웠던 점</strong>
          <br />
          초기에 컴포넌트 분리 설계를 충분히 고려하지 않아, 유사한 UI를 반복
          구현하게 되었고 이는 유지보수와 가독성 측면에서 아쉬움이 남았습니다.
          다음 프로젝트 부터는 프로젝트 시작 전에 공통 UI 컴포넌트를 식별하고,
          구조적으로 분리 설계하며 개발을 진행해야겠다는 생각을 하게 되었습니다.
          <br />
          <br />
          ✔️ <strong>새롭게 알게 된 지식 및 개발 역량</strong>
          <br />
          TypeScript로의 타입 선언과 오류 방지, React의 렌더링 구조와
          useEffect의 동작 방식, 상태 관리를 위한 Zustand의 효율성 등 실무형
          기술 스택을 직접 적용하며 이해도를 높일 수 있었습니다.
          <br />
          <br />
          ✔️ <strong>깨달은 점</strong>
          <br />
          눈에 보이는 결과물도 중요하지만, 그 이면의 코드 구조와 협업 효율성까지
          고려해야 진짜 '완성도 있는 개발'이라는 점을 배웠습니다.
        </div>
      </div>
    </div>
  );
}

export default Poppin;
