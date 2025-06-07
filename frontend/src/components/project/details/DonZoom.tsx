import "@/css/project/ProjectDetail.css";
import donzoomThumbnail from "@/assets/images/project/donzoom/donzoomThumbnail.png";
import drawImg from "@/assets/images/project/donzoom/donzoomDraw.png";
import parentsImg from "@/assets/images/project/donzoom/donzoomParents.png";
import payImg from "@/assets/images/project/donzoom/donzoomPay.png";
import quizImg from "@/assets/images/project/donzoom/donzoomQuiz.png";
import stockImg from "@/assets/images/project/donzoom/donzoomStock.png";

function DonZoom() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">돈Zoom</div>
        <div className="project-summary">
          아이들을 위한 금융 교육 통합 플랫폼
          <br />
          (SSAFY 특화프로젝트 우수상)
        </div>
      </div>

      <img
        className="project-detail-image"
        src={donzoomThumbnail}
        alt="DonZoom 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 3명, backend 3명 (총 6명)
          <br />
          2024.08.19 ~ 2024.10.11 (총 7주)
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          DonZoom은 어린이의 자산 관리를 돕고 금융 지식을 자연스럽게 학습할 수
          있도록 구성된 어린이 맞춤형 금융 교육 통합 플랫폼입니다. 실제 주식
          데이터를 활용한 모의 투자, 1일 3문항의 경제 퀴즈, 부모와의 연동 기능,
          용돈 입출금 관리, 캐릭터 뽑기 시스템 등 다양한 학습 요소를 게임화하여
          학습 몰입도를 높였습니다.
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>용돈 관리 및 입출금 기능</li>
          <li>실제 주식 정보를 반영한 모의 주식 투자</li>
          <li>1일 3문항 경제 상식 퀴즈 (GPT 기반 생성)</li>
          <li>부모와 미션 활동 연동을 통한 추가 용돈 지급</li>
          <li>가상 화폐로 캐릭터 뽑기 및 수집 기능</li>
        </ul>
      </div>

      <div>
        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img src={quizImg} alt="퀴즈 화면" />
            <div className="description-screenshot">
              <div className="screenshot-title">경제 상식 퀴즈</div>
              <div className="description-text">
                매일 3문항의 경제 퀴즈를 풀고 금융 지식을 습득할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container column">
            <img src={stockImg} alt="모의 주식 투자 화면" />
            <div className="description-screenshot">
              <div className="screenshot-title">모의 주식 투자</div>
              <div className="description-text">
                실제 주식 데이터를 활용하여 모의 투자 학습을 할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container column">
            <img src={drawImg} alt="캐릭터 뽑기 화면" />
            <div className="description-screenshot">
              <div className="screenshot-title">캐릭터 뽑기</div>
              <div className="description-text">
                미션과 투자로 얻은 티켓으로 랜덤 캐릭터를 수집할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container column">
            <img src={payImg} alt="결제 화면" />
            <div className="description-screenshot ">
              <div className="screenshot-title">용돈 결제</div>
              <div className="description-text">
                부모와의 미션활동을 통해 추가 용돈을 얻을 수 있습니다. <br />
                또한 QR 코드로 용돈을 결제하고 기록을 관리할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container column">
            <img src={parentsImg} alt="부모 연동 화면" />
            <div className="description-screenshot">
              <div className="screenshot-title">부모 연동</div>
              <div className="description-text">
                부모 계정과 연동해 아이의 거래내역을 확인할 수 있고, 미션을 통해
                추가 용돈을 지급할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>UI/UX 기획, Frontend, 팀장, 발표</div>
        <ul className="contents-text">
          <li>Figma 기반 UI/UX 기획</li>
          <li>부모-아이 분리 UI 설계 및 상태 관리 구현</li>
          <li>QR 생성 및 결제 기능 구현</li>
          <li>GPT 기반 경제 상식 퀴즈 1일 3문제 자동 생성 기능 구현</li>
          <li>캐릭터 뽑기 시스템 개발</li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          React-Native, TypeScript, Zustand, React-Query, StyleSheet, Figma
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          실제 데이터를 기반으로 사용자에게 정보를 제공하는 과정에서 API 호출을
          최소화하고 성능을 고려한 클라이언트 구성의 중요성을 체감했습니다.
          React-Query를 활용하여 주식 데이터 캐싱과 API 호출 빈도를
          최적화했으며, 네트워크 상황에 따른 UX 흐름까지 고려할 수 있었습니다.
          <br />
          <br />
          캐릭터 뽑기 기능 구현 과정에서는 사용자가 연속으로 뽑기를 진행할
          때마다 렌더링이 누적되어 성능 저하가 발생하는 문제를 겪었습니다. 이를
          해결하기 위해 부모 컴포넌트와 자식 컴포넌트를 명확히 분리하여 불필요한
          렌더링을 줄임으로써 사용자 경험을 유지하면서 성능 개선 효과를
          얻었습니다.
          <br />
          <br />
          ✔️ <strong>아쉬웠던 점</strong>
          <br />
          팀장으로서 프로젝트 전반의 일정 관리도 함께 맡았는데, 기능 구현에
          집중하느라 세부 일정 관리에 소홀했던 점이 아쉬웠습니다. 기능 우선순위
          설정과 주 단위 마일스톤 관리를 철저히 하여 일정 지연을 방지하는 것에
          대해 의식하고 진행하는 계기가 되었습니다.
          <br />
          <br />
          ✔️ <strong>개발 역량 및 새롭게 배운 기술</strong>
          <br />
          - React Query를 활용한 데이터 캐싱 및 상태 관리 전략
          <br />
          - React Native 기반 모바일 화면 구현 및 라이브러리 활용
          <br />
          - 성능 최적화를 위한 컴포넌트 분리
          <br />
          - 사용자 중심 게이미피케이션 UX 설계 및 흐름 제어
          <br />
          <br />
          ✔️ <strong>깨달은 점</strong>
          <br />
          아이들이 주 사용자인 앱에서 단순히 기능 구현만이 아닌, 그들에게 맞는
          섬세한 설계가 필요함을 느꼈습니다. 단어 선택 하나하나가 아이들의
          이해도를 좌우할 수 있었고, 배경색상과 폰트 크기, 터치 영역과 같은
          시각적 요소들 또한 아이들 맞춤형으로 설계했습니다. 또한 아이들이
          반복적으로 사용하는 기능에서 발생할 수 있는 성능 저하 문제를 사전에
          방지하기 위한 구조적인 설계 역시 중요하다는 점을 깨달았습니다.
          사용자의 상황과 특성에 맞춘 흐름을 생각하며 사용자 친화적 기능을
          구현하는 것을 생각하게 된 계기가 되었습니다.
        </div>
      </div>
    </div>
  );
}

export default DonZoom;
