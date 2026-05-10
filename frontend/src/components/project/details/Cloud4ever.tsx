import "@/css/project/ProjectDetail.css";
import cloud4everArchitecture from "@/assets/images/project/cloud4ever/cloud4ever_architecture.png";
import cloud4everDefaultArchitecture from "@/assets/images/project/cloud4ever/cloud4ever_default_architecture.png";
import cloud4everThumbnail from "@/assets/images/project/cloud4ever/cloud4ever_logo.png";
import cloud4everUI from "@/assets/images/project/cloud4ever/cloud4ever_UI1.png";

function Cloud4ever() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <div className="project-name">Cloud4ever</div>
        <div className="project-summary">
          Terraform 기반 AWS 보안 분석 및 배포 지원 플랫폼
        </div>
      </div>

      <img
        className="project-detail-image project-logo-image"
        src={cloud4everThumbnail}
        alt="Cloud4ever 대표 이미지"
      />

      <div>
        <div className="title-text">제작 인원 & 제작 기간</div>
        <div className="contents-text">
          frontend 1명, backend 1명, 진단/조치 terraform 제작 3명 (총 5명)
          <br />
          2026.03.12 ~ 2026.03.25 (주말과 공휴일을 제외, 약 10일)
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 개요</div>
        <div className="contents-text">
          Cloud4ever는 Terraform 기반 AWS 배포 과정에서 보안 취약 설정을 사전에
          탐지하고, 배포 예정 인프라 구조를 아키텍처 그래프로 시각화하는
          클라우드 보안 분석 플랫폼입니다. 사용자는 대시보드에서 취약 설정을
          확인하고, 권장 조치 또는 직접 설정 수정을 통해 더 안전한 배포 흐름을
          만들 수 있습니다.
          <br />
          <br />
          React Flow를 활용해 EC2, VPC, Subnet, RDS, S3 등 AWS 리소스를 노드와
          연결 관계로 표현하고, 각 노드를 선택하면 해당 리소스의 Terraform/AWS
          설정 정보를 확인할 수 있도록 구성했습니다.
        </div>
      </div>

      <div>
        <div className="title-text">시스템 아키텍처</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img
              src={cloud4everArchitecture}
              alt="Cloud4ever 시스템 아키텍처"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="description-text">
                사용자가 GitHub 저장소와 브랜치를 선택하면, 백엔드가 Terraform
                코드를 분석하고 Checkov 기반 보안 스캔과 자체 보정 로직을 거쳐
                취약점 결과와 아키텍처 데이터를 생성합니다. Terraform이 없는
                경우에는 기본 템플릿을 활용해 배포 흐름을 지원하도록
                구성했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">주요 기능</div>
        <ul className="contents-text">
          <li>Terraform plan JSON 기반 AWS 리소스 분석</li>
          <li>VPC, Subnet, EC2, RDS, S3, Security Group 등 인프라 시각화</li>
          <li>React Flow 기반 리소스 노드/엣지 그래프 구성</li>
          <li>
            노드 선택 시 EC2, VPC, Security Group 등 리소스별 설정 정보 표시
          </li>
          <li>Security Group, IAM, S3 등 주요 보안 설정 취약점 탐지</li>
          <li>
            백엔드 진단 결과를 기반으로 취약 리소스와 보안 이슈를 화면에 표시
          </li>
          <li>대시보드 기반 보안 설정 수정 및 Pass 처리</li>
          <li>조치 후 배포 승인 시 GitHub Actions 기반 AWS 배포 흐름 지원</li>
          <li>Terraform 코드와 실제 AWS 환경 간 Drift Detection</li>
          <li>취약 설정으로 발생할 수 있는 공격 경로 예측</li>
        </ul>
      </div>

      <div>
        <div className="title-text">서비스 화면</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img
              src={cloud4everUI}
              alt="Cloud4ever 인프라 아키텍처 대시보드"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="screenshot-title">인프라 아키텍처 대시보드</div>
              <div className="description-text">
                Terraform 분석 결과를 React Flow 기반 그래프로 표현하고, 취약한
                리소스는 경고 표시와 우측 보안 패널에서 함께 확인할 수 있도록
                구성했습니다. 사용자는 배포 전/현재 AWS 설정을 전환하며 인프라
                상태와 취약점 수를 확인할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">기본 제공 AWS 아키텍처</div>
        <div className="project-screenshot-group">
          <div className="screenshot-container column">
            <img
              src={cloud4everDefaultArchitecture}
              alt="Cloud4ever 기본 제공 AWS 아키텍처"
              className="project-wide-image"
            />
            <div className="description-screenshot">
              <div className="description-text">
                사용자가 별도의 Terraform 코드를 준비하지 않은 경우에도 서비스를
                시작할 수 있도록 기본 AWS 아키텍처 템플릿을 제공했습니다. WAF,
                CloudFront, S3, VPC, ALB, Auto Scaling Group, EC2, RDS, VPC
                Endpoint, KMS, DynamoDB, CloudWatch, GuardDuty 등으로 구성된
                기준 아키텍처를 바탕으로 배포와 보안 검토 흐름을 체험할 수
                있도록 했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-text">담당 역할</div>
        <div>AI 기반 프론트엔드 개발, 백엔드 API 연동, 배포 흐름 구현 보조</div>
        <ul className="contents-text">
          <li>AI를 활용해 React 기반 인프라 대시보드와 화면 구조 초안 생성</li>
          <li>
            React Flow 라이브러리를 활용해 AWS 리소스별 노드와 연결 관계 시각화
          </li>
          <li>
            EC2, VPC, Subnet 등 노드 클릭 시 해당 리소스의 설정 정보를 패널에
            표시
          </li>
          <li>
            백엔드에서 받은 보안 진단 결과를 취약점 패널과 그래프 경고 상태로
            연결
          </li>
          <li>
            조치 후 배포 승인 시 GitHub 브랜치 push API를 호출해 GitHub Actions
            기반 배포가 진행되도록 프론트 흐름 구현
          </li>
          <li>
            생성된 코드가 실제 API 응답 구조와 맞도록 데이터 표시 흐름 검토 및
            수정
          </li>
        </ul>
      </div>

      <div>
        <div className="title-text">기술 스택</div>
        <div className="contents-text">
          React, Vite, JavaScript, React Flow, React Query, FastAPI, PostgreSQL,
          Terraform, AWS, Docker
        </div>
      </div>

      <div>
        <div className="title-text">AI 활용 방식</div>
        <div className="contents-text">
          본 프로젝트는 AI-assisted development 방식으로 진행했습니다. 인프라
          분석 결과를 어떤 화면 구조로 보여줄지 정의한 뒤, AI를 활용해 React
          컴포넌트와 React Flow 그래프, 설정 패널, 취약점 표시 흐름의 초안을
          빠르게 생성했습니다.
          <br />
          <br />
          이후 생성된 코드가 Terraform, AWS 리소스, 취약점 정보라는 프로젝트
          맥락에 맞는지 검토하고, 백엔드 API 응답 구조에 맞게 데이터 표시 방식을
          수정했습니다. 백엔드의 주요 진단 로직은 팀원이 담당했지만, 프론트에서
          해당 결과를 받아 사용자에게 이해 가능한 그래프와 설정 패널로 보여주는
          역할을 맡았습니다.
        </div>
      </div>

      <div>
        <div className="title-text">프로젝트 회고</div>
        <div className="contents-text">
          Cloud4ever를 개발하면서 배포 이후에 문제를 발견하는 것보다 배포 전에
          위험 요소를 검증하는 흐름이 중요하다는 점을 느꼈습니다. Terraform plan
          결과를 활용해 배포 예정 리소스를 분석하고, 이를 개발자가 이해할 수
          있는 그래프와 취약점 정보로 바꾸는 과정에서 인프라와 보안, 사용자
          경험을 함께 고려해야 했습니다. 그래서 실제 아키텍처 내 어느 리소스와
          연결에서 문제가 발생하는지 시각적으로 전달하는 데 집중했습니다.
          <br />
          <br />
          AI를 활용하면서 느낀 점은, 요구사항을 자세히 전달하더라도 AI가
          프로젝트 전체 맥락보다 요청한 부분만 보고 코드를 수정하는 경우가
          있다는 점이었습니다. 이 과정에서 한 기능은 해결되지만 기존 데이터
          흐름이나 화면 구조와 맞지 않는 문제가 생기기도 했습니다.
          <br />
          <br />
          그래서 AI를 효과적으로 사용하려면 개발자가 먼저 전체 구조와 데이터
          흐름을 이해하고, 생성된 코드가 기존 설계와 충돌하지 않는지 검증해야
          한다는 것을 배웠습니다. 앞으로 AI를 활용할 때 전체 맥락을 파악한 뒤
          필요한 부분의 구현 속도를 높이는 보조 도구로 활용할 것 같다는 생각이
          들었습니다.
        </div>
      </div>
    </div>
  );
}

export default Cloud4ever;
