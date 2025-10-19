import "@/css/project/ProjectDetail.css";

import akifyThumbnail from "@/assets/images/project/akify/akify.png";

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
          2024.07 ~ 현재 (지속 업데이트 중)
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
          <li>Backend: Spring Boot, Postgre</li>
          <li>기타: Firebase, TalkPlus, Danal 본인인증</li>
        </ul>

        <div className="title-text">업데이트 현황</div>
        <ul className="contents-text">
          <li>v1.0.4 (Android): 배포 완료</li>
          <li>v1.0.3 (iOS): App Store 심사 중</li>
          <li>다음 버전: 채팅 정렬 개선, 다크모드 대응 예정</li>
        </ul>

        <div className="title-text">기능 미리보기</div>
        {/* <img
          className="project-detail-image"
          src={searchFeatureGif}
          alt="검색 기능"
        />
        <img
          className="project-detail-image"
          src={uploadFeatureGif}
          alt="매물 등록"
        />
        <img
          className="project-detail-image"
          src={chatFeatureGif}
          alt="채팅 기능"
        /> */}
      </div>
    </div>
  );
}

export default Akify;
