import { useParams } from "react-router-dom";
import Poppin from "@/components/project/details/Poppin";
import DonZoom from "@/components/project/details/DonZoom";
import Connect from "@/components/project/details/Connect";
import DealLight from "./details/Deallight";
import Akify from "@/components/project/details/Akify";
import Autoisms from "@/components/project/details/Autoisms";
import Cloud4ever from "@/components/project/details/Cloud4ever";

function ProjectDetail() {
  const { id } = useParams();

  switch (id) {
    case "poppin":
      return <Poppin />;
    case "connect":
      return <Connect />;
    case "donzoom":
      return <DonZoom />;
    case "deallight":
      return <DealLight />;
    case "akify":
      return <Akify />;
    case "autoisms":
      return <Autoisms />;
    case "cloud4ever":
      return <Cloud4ever />;
    default:
      return <div>해당 프로젝트를 찾을 수 없습니다.</div>;
  }
}

export default ProjectDetail;
