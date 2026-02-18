import "@/css/project/ProjectDetail.css";
import dealLightThumbnail from "@/assets/images/project/deallight/deallight.png";

function DealLight() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">Deal-light</div>
        <div className="project-summary">
          에너지 효율 등급을 바탕으로 전기요금 비교 및 제품 추천 서비스
        </div>
      </div>

      <img
        className="project-detail-image"
        src={dealLightThumbnail}
        alt="Deal-light 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 3명, backend 2명 (총 5명)
          <br />
          2025.01.07 ~ 2025.10.31.
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          Deal-light는 가전제품의 에너지 소비 정보를 분석해 전기요금 절감에
          도움이 되는 제품을 추천하는 서비스입니다. 사용자는 에너지 소비 효율
          등급을 기준으로 다양한 제품의 전기요금을 비교할 수 있으며, 이를 통해
          자신에게 가장 적합한 제품을 선택하는 데 도움을 받을 수 있습니다.
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>에너지 소비 데이터를 기반으로 한 전기요금 계산 및 비교</li>
          <li>제품 검색</li>
          <li>전기요금 및 최저가 비교, 구매 사이트 연결</li>
          <li>내가 사용하는 제품 관리 및 마이페이지</li>
          <li>이달의 추천 제품 제공</li>
          <li>전기/전력 상식 콘텐츠</li>
          <li>최근 본 제품 목록 제공</li>
        </ul>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>UI/UX 기획, Frontend 개발, 팀장</div>
        <ul className="contents-text">
          <li>회원가입, 로그인, 로그아웃 구현</li>
          <li>제품 비교 기능 UI 구현</li>
          <li>전기요금 비교 로직 설계 및 계산화면 개발</li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          React Native, TypeScript, Zustand, StyleSheet
        </div>
      </div>
    </div>
  );
}

export default DealLight;
