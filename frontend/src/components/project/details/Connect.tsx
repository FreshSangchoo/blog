import "@/css/project/ProjectDetail.css";
import connectThumbnail from "@/assets/images/project/connect/connect.png";

import connectPhoneAlarmName from "@/assets/images/project/connect/connectPhoneAlarmName.mp4";
import connectPhoneChange from "@/assets/images/project/connect/connectPhoneChange.mp4";
import connectPhoneList from "@/assets/images/project/connect/connectPhoneList.mp4";
import connectPhoneRecommend from "@/assets/images/project/connect/connectPhoneRecommend.mp4";
import connectPhoneSTT from "@/assets/images/project/connect/connectPhoneSTT.mp4";

import connectWatchAlarmName from "@/assets/images/project/connect/connectWatchAlarmName.mp4";
import connectWatchChange from "@/assets/images/project/connect/connectWatchChange.mp4";
import connectWatchList from "@/assets/images/project/connect/connectWatchList.mp4";
import connectWatchRecommend from "@/assets/images/project/connect/connectWatchRecommend.mp4";
import connectWatchSTT from "@/assets/images/project/connect/connectWatchSTT.mp4";

function Connect() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">이어주다</div>
        <div className="project-summary">
          청각장애인을 위한 개인 맞춤형 대화 보조 및 알림 서비스
        </div>
      </div>

      <img
        className="project-detail-image"
        src={connectThumbnail}
        alt="이어주다 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 3명, backend 1명, AI 2명 (총 6명)
          <br />
          2024.10.14 ~ 2024.11.19 (총 6주)
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          이어주다는 청각장애인을 위한 실시간 대화 보조 및 알림 기능을 제공하는
          서비스입니다. 상대방의 음성을 텍스트로 변환(STT)하고, 대화 흐름을
          기반으로 예상 답변을 추천하며, 사용자가 선택한 답변을 TTS로 출력해
          빠르고 자연스러운 의사소통을 돕습니다. 또한 다양한 생활 소리를
          감지하여 진동 및 화면 알림으로 전달합니다.
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>STT, TTS를 통한 음성 인식 및 출력</li>
          <li>대화 흐름 기반 예상 답변 및 단어 교체 추천</li>
          <li>상황별 알림 및 등록 단어 알림</li>
          <li>워치 및 핸드폰 연동 텍스트 전송 및 음성 출력</li>
          <li>대화 내용 저장 기능</li>
        </ul>
      </div>

      <div>
        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <div className="screenshot-media-container">
              <video
                src={connectWatchSTT}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
              <video
                src={connectPhoneSTT}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
            </div>
            <div className="description-screenshot">
              <div className="screenshot-title">음성 인식(STT)</div>
              <div className="description-text">
                상대방 음성을 실시간으로 텍스트로 변환하여 화면에 출력합니다.
              </div>
            </div>
          </div>

          <div className="screenshot-container column">
            <div className="screenshot-media-container">
              <video
                src={connectWatchRecommend}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
              <video
                src={connectPhoneRecommend}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
            </div>
            <div className="description-screenshot">
              <div className="screenshot-title">답변 추천</div>
              <div className="description-text">
                인식한 상대방의 음성을 바탕으로 대화 흐름에 따른 예상 답변을
                추천합니다.
              </div>
            </div>
          </div>

          <div className="screenshot-container column">
            <div className="screenshot-media-container">
              <video
                src={connectWatchChange}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
              <video
                src={connectPhoneChange}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
            </div>
            <div className="description-screenshot">
              <div className="screenshot-title">단어 교체</div>
              <div className="description-text">
                생성된 답변에서 단어를 쉽고 빠르게 바꿀 수 있도록 돕습니다.
                <br />
                이때 생성되는 단어들은 지난 대화 기록을 기반으로 합니다.
              </div>
            </div>
          </div>
          <div className="screenshot-container column">
            <div className="screenshot-media-container">
              <video
                src={connectWatchList}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
              <video
                src={connectPhoneList}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
            </div>
            <div className="description-screenshot">
              <div className="screenshot-title">대화 목록</div>
              <div className="description-text">
                지난 대화 내역을 확인할 수 있습니다.
              </div>
            </div>
          </div>

          <div className="screenshot-container column">
            <div className="screenshot-media-container">
              <video
                src={connectWatchAlarmName}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
              <video
                src={connectPhoneAlarmName}
                autoPlay
                loop
                muted
                playsInline
                className="project-detail-video"
              />
            </div>
            <div className="description-screenshot">
              <div className="screenshot-title">이름 알림</div>
              <div className="description-text">
                사용자의 이름이나 별명을 부르면 진동과 함께 알림을 표시합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>UI/UX 기획, frontend(워치 기능 구현), 팀장, 발표</div>
        <ul className="contents-text">
          <li>STT 기능을 적용하여 음성을 텍스트로 출력</li>
          <li>API 호출을 통한 답변 생성 및 단어 추천 기능 구현</li>
          <li>생성된 답변에 대한 단어 교체 기능 구현</li>
          <li>선택 문장을 TTS로 변환해 워치에서 출력</li>
          <li>등록된 단어 및 상황별 소리 인식하여 알림 전달</li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          Kotlin (Android & Wear OS), OpenAI, Neo4j, Pinecone, TTS, Google STT
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          제한된 화면 크기와 동작만으로 정보를 효과적으로 전달하기 위해 직관적인
          UI 설계에 많은 신경을 썼습니다. 복잡한 흐름보다 사용자가 빠르게
          이해하고 반응할 수 있도록, 구성 요소의 배치와 흐름, 피드백 방식을
          반복적으로 검토하고 개선했습니다.
          <br />
          <br />
          실제 사용자 인터뷰를 통해 "실제로 도움이 된다"는 말을 들었을 때 가장
          큰 보람을 느꼈고, 그 한마디가 프로젝트에 더 집중할 수 있는 원동력이
          되었습니다. 청각장애인 입장에서 어떤 흐름이 자연스러울지, 어떤 표현
          방식이 더 이해하기 쉬울지를 고민하며 UI/UX를 설계했습니다. 기능 구현을
          넘어, 누군가의 일상에 실질적인 도움을 줄 수 있는 앱을 만들었다는
          점에서 개발자로서 큰 뿌듯함을 느낄 수 있었습니다.
          <br />
          <br />
          ✔️ <strong>개발 역량 및 새롭게 배운 기술</strong>
          <br />
          - Kotlin 기반 Wear OS 개발 경험
          <br />
          - STT, TTS 기반 인터랙션 구현 경험
          <br />
          - 실시간 데이터 처리 흐름에 맞는 UI 설계 및 최적화
          <br />
          - 사용자 피드백 기반 기능 개선 경험
          <br />
          <br />
          ✔️ <strong>깨달은 점</strong>
          <br />
          청각장애인을 위한 서비스이기에 UI 구성과 기능 부분에서 상황을 더 깊이
          고려해야 한다는 것을 느꼈습니다. 음성의 빠르기, 텍스트 출력의 명확성,
          단어 호출 속도의 개선 등 실제 사용자 중심 설계가 곧 기능 이상의 가치를
          만든다는 점을 배웠습니다. 사용자에게 실질적인 도움이 되는 서비스를
          만든다는 것이 개발자로서 얼마나 큰 동기와 책임감을 줄 수 있는지를
          깨달았습니다.
        </div>
      </div>
    </div>
  );
}

export default Connect;
