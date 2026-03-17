import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "@/css/project/Project.css";
import poppinImage from "@/assets/images/project/poppin/poppin.png";
import donzoomImage from "@/assets/images/project/donzoom/donzoom.png";
import connectImage from "@/assets/images/project/connect/connect.png";
import deallightImage from "@/assets/images/project/deallight/deallight.png";
import akifyImage from "@/assets/images/project/akify/akify.png";
import { useMemo, useState } from "react";

const projectList = [
  {
    id: "poppin",
    title: "팝핀 (Poppin)",
    summary: "팝업스토어 추천 및 예약 플랫폼 📌",
    image: poppinImage,
    category: "frontend",
  },
  {
    id: "donzoom",
    title: "돈Zoom",
    summary: "아이들을 위한 금융 교육 통합 플랫폼 💰",
    image: donzoomImage,
    category: "frontend",
  },
  {
    id: "connect",
    title: "이어주다",
    summary: "청각장애인을 위한 소리 알림 및 대화 보조 서비스 📣",
    image: connectImage,
    category: "frontend",
  },
  {
    id: "deallight",
    title: "deal-light",
    summary: "가전 제품의 에너지 소비 효율 비교 플랫폼 ⚡",
    image: deallightImage,
    category: "frontend",
  },
  {
    id: "akify",
    title: "아키파이",
    summary: "악기 중고거래 플랫폼 🎸",
    image: akifyImage,
    category: "frontend",
  },
];

type SortOptions = 'latest' | 'name';

const SORT_LABEL = {
  latest: '최신순',
  name: '이름순'
}

const frontendProjects = projectList.filter((p) => p.category === "frontend");
const securityProjects = projectList.filter((p) => p.category === "security");

function Project() {
  const navigate = useNavigate();
  const [sort, setSort] = useState<SortOptions>('latest');
  const [sortLabel, setSortLabel] = useState<string>(SORT_LABEL['latest']);

  const handleSort = () => {
    if (sort === 'latest') {
      setSort("name");
      setSortLabel(SORT_LABEL["name"]);
    } else {
      setSort("latest");
      setSortLabel(SORT_LABEL["latest"]);
    }
  }

  const sortedProjects = useMemo(() => {
    const sorted = [...frontendProjects];

    if (sort === 'latest') {
      return sorted.reverse();
    }
    if (sort === 'name') {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }, [sort]);

  return (
    <div className="project-container">
      <div className="project-sort">
        <div onClick={handleSort} className="project-sort-text">
          {sortLabel}
        </div>
      </div>
      <h1 className="project-title">PROJECT LIST</h1>

      <div className="project-section">
        <h2 className="project-section-title">Frontend</h2>
        <div className="project-card-grid">
          {sortedProjects.map((project) => (
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

      {securityProjects.length > 0 && (
        <div className="project-section">
          <h2 className="project-section-title">Security</h2>
          <div className="project-card-grid">
            {securityProjects.map((project) => (
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
      )}
    </div>
  );
}

export default Project;
