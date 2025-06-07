// src/project/Project.tsx
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "@/css/project/Project.css";
import poppinImage from "@/assets/images/project/poppin/poppin.png";
import donzoomImage from "@/assets/images/project/donzoom/donzoom.png";
import connectImage from "@/assets/images/project/connect/connect.png";
import deallightImage from "@/assets/images/project/deallight/deallight.png";

const projectList = [
  {
    id: "poppin",
    title: "팝핀 (Poppin)",
    summary: "팝업스토어 추천 및 예약 플랫폼 📌",
    image: poppinImage,
  },
  {
    id: "donzoom",
    title: "돈Zoom",
    summary: "아이들을 위한 금융 교육 통합 플랫폼 💰",
    image: donzoomImage,
  },
  {
    id: "connect",
    title: "이어주다",
    summary: "청각장애인을 위한 소리 알림 및 대화 보조 서비스 📣",
    image: connectImage,
  },
  {
    id: "deallight",
    title: "deal-light",
    summary: "가전 제품의 에너지 소비 효율 비교 플랫폼 ⚡",
    image: deallightImage,
  },
];

function Project() {
  const navigate = useNavigate();

  return (
    <div className="project-container">
      <h1 className="project-title">PROJECT LIST</h1>
      <div className="project-card-grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            image={project.image}
            onClick={() => navigate(`/project/${project.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
