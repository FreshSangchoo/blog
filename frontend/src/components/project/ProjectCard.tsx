type Props = {
  title: string;
  summary: string;
  image: string;
  onClick: () => void;
};

function ProjectCard({ title, summary, image, onClick }: Props) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} className="project-card-image" />
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-summary">{summary}</p>
    </div>
  );
}

export default ProjectCard;
