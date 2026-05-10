import "@/css/project/ProjectDetail.css";
import autoismsThumbnail from "@/assets/images/project/autoisms/autoisms_logo.png";
import autoismsArchitecture from "@/assets/images/project/autoisms/autoisms_architecture.png";
import autoismsDashboard from "@/assets/images/project/autoisms/autoisms.png";
import autoismsReport from "@/assets/images/project/autoisms/autoisms_report.png";

function Autoisms() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">AUTOISMS</div>
        <div className="project-summary">
          KISA 기준 보안 취약점 자동 진단 및 조치 시스템
        </div>
      </div>

      <img
        className="project-detail-image project-logo-image"
        src={autoismsThumbnail}
        alt="AUTOISMS 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 1명, backend 1명, 진단/조치 script 제작 3명 (총 5명)
          <br />
          2026.02.04 ~ 2026.02.20 (주말과 공휴일을 제외, 약 10일)
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          AUTOISMS는 Linux 서버를 대상으로 KISA ISMS-P 기준 보안 취약점을 자동
          진단하고, 취약 항목에 대한 조치와 재진단, 보고서 생성을 하나의
          흐름으로 제공하는 보안 운영 자동화 시스템입니다. 운영자가 서버에 직접
          접속해 반복적으로 확인해야 하는 항목을 자동화하여 점검 누락을 줄이고,
          조치 결과를 일관되게 관리하는 것을 목표로 했습니다.
        </div>
      </div>

      <div>
        <div className="title-text">시스템 아키텍처</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img
              src={autoismsArchitecture}
              alt="AUTOISMS 시스템 아키텍처"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="description-text">
                클라이언트는 FastAPI 기반 Control Server와 통신하고, Control
                Server는 진단 엔진, 조치 엔진, Ansible 엔진, SSH 엔진, 보고서
                모듈을 통해 대상 서버를 점검합니다. 진단 결과와 스냅샷은 로컬
                저장소에 보관하고, 이전 스냅샷과 현재 결과를 비교해 회귀 감지에
                활용했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>SSH 및 Ansible 기반 원격 서버 보안 진단</li>
          <li>ISMS-P 기준 U-01 ~ U-67 항목 자동 점검</li>
          <li>취약 항목 자동 조치 및 설정 파일 백업</li>
          <li>조치 후 재진단을 통한 개선 여부 검증</li>
          <li>이전 진단 결과와 비교한 회귀 감지</li>
          <li>대시보드 기반 서버 연결 상태, 취약점 분포, 상태별 통계 시각화</li>
          <li>PDF, CSV, JSON 형식의 진단/조치 보고서 생성</li>
        </ul>
      </div>

      <div>
        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img
              src={autoismsDashboard}
              alt="AUTOISMS 대시보드 화면"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="screenshot-title">통합 대시보드</div>
              <div className="description-text">
                등록된 서버 수, 연결 상태, 전체 취약점 수, 회귀 발생 여부를
                한눈에 확인할 수 있도록 구성했습니다. 취약점 카테고리 분포,
                상태별 분포, 시간대별 취약점 추이를 시각화하여 운영자가 현재
                보안 상태를 빠르게 파악할 수 있도록 했습니다.
              </div>
            </div>
          </div>

          <div className="screenshot-container column">
            <img
              src={autoismsReport}
              alt="AUTOISMS 전체 진단 결과 보고서"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="screenshot-title">진단 결과 보고서</div>
              <div className="description-text">
                서버별 점검 결과를 보고서로 생성했습니다. 전체 진단 항목,
                양호/취약/수동조치 항목 수, 위험도 분포, 카테고리별 취약 항목을
                정리해 진단 결과를 공유하거나 사후 조치 근거로 활용할 수 있도록
                했습니다. 보고서는 PDF, CSV, JSON 형태가 있으며, 전체 진단
                보고서, 전체 조치 보고서, 서버별 개별 진단 보고서, 서버별 개별
                조치 보고서로 총 4가지의 항목이 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">핵심 기능: 회귀 감지</div>
        <div className="contents-text">
          AUTOISMS는 단순히 현재 취약점을 진단하는 데서 끝나지 않고, 이전 진단
          결과와 현재 진단 결과를 비교해 보안 상태가 다시 악화되는 상황을
          감지하도록 구성했습니다.
          <br />
          <br />
          예를 들어 이전 진단에서 양호하거나 조치 완료된 항목이 이후 진단에서
          다시 취약 또는 수동 조치 상태로 바뀌면 회귀로 판단합니다. 이를
          대시보드의 회귀 발생 지표와 알림 흐름으로 보여주어, 운영자가 조치
          이후에도 설정이 다시 위험한 상태로 돌아갔는지 확인할 수 있도록
          했습니다.
        </div>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>프론트엔드 개발, 보고서 생성 로직 구현, 프로젝트 구조 개선</div>
        <ul className="contents-text">
          <li>
            AI가 단일 index.html 형태로 생성한 초기 화면을 HTML, CSS, JavaScript
            파일로 분리
          </li>
          <li>
            JavaScript 코드를 대시보드, 서버 관리, 진단/조치 동작, 모달, 보고서
            등 기능 단위로 분리
          </li>
          <li>
            진단 결과를 기반으로 대시보드 통계, 취약점 분포, 상태별 차트 화면
            구현
          </li>
          <li>
            진단/조치 결과를 PDF, CSV, JSON 형식으로 내려받는 보고서 생성 흐름
            구현
          </li>
          <li>
            팀원이 작성한 진단/조치 스크립트 결과가 화면과 보고서에 반영되도록
            데이터 흐름 검토
          </li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          FastAPI, Python, Vanilla JavaScript, Ansible, Paramiko, Bash, SQLite,
          WeasyPrint
        </div>
      </div>

      <div>
        <div className="title-text">AI 활용 방식</div>
        <div className="contents-text">
          본 프로젝트에서는 AI를 초기 화면과 기능 구현 초안을 빠르게 만드는
          도구로 활용했습니다. 짧은 개발 기간 안에 결과물을 완성해야 했기
          때문에, 처음에는 요구사항을 바탕으로 전체 화면 생성을 요청했습니다.
          다만 결과물이 하나의 index.html 파일에 모두 들어간 형태였기 때문에
          유지보수와 협업이 어렵다고 판단했습니다.
          <br />
          <br />
          이후 해당 코드를 HTML, CSS, JavaScript로 분리하고, JavaScript 역시
          기능별 파일로 나누어 프로젝트 구조를 정리했습니다. 보고서 생성 로직도
          AI를 활용해 초안을 만들고, 실제 진단/조치 결과 데이터에 맞게 화면과
          다운로드 흐름을 검토하며 수정했습니다. 진단/조치 스크립트와 주요
          백엔드 로직은 팀원과 역할을 나누어 진행했습니다.
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          보안 진단 및 조치 자동화 도구는 취약점을 찾는것도 중요하지만 자동 조치
          과정에서 시스템 안정성을 해치지 않는 것이 중요하다고 느꼈습니다.
          그래서 설정 변경 전 백업, 조치 후 재진단, 이전 결과와의 비교를 통해
          안전하게 운영할 수 있는 흐름을 만들고자 했습니다.
          <br />
          <br />
          저는 주로 프론트엔드와 보고서 생성 영역을 맡았고, 진단/조치 스크립트와
          주요 백엔드 로직은 팀원이 담당했습니다. 이 과정에서 팀원이 만든
          스크립트와 백엔드 결과가 사용자 화면과 보고서에 자연스럽게 연결되도록
          구조를 이해하고 맞추는 경험을 했습니다.
          <br />
          <br />
          AI를 활용한 개발에서는 생성된 코드를 바로 사용하지 않고, 프로젝트
          구조와 협업 방식에 맞게 분리하고 검증하는 과정이 중요하다는 점을
          배웠습니다.
        </div>
      </div>
    </div>
  );
}

export default Autoisms;
