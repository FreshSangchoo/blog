import "@/css/Tags.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Post } from "../types/Post";

function Tags() {
  const [tagCounts, setTagCounts] = useState<Record<string, number>>({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (!stored) return;

    const posts: Post[] = JSON.parse(stored);
    const counts: Record<string, number> = {};

    posts.forEach((post) => {
      (post.hashtags || []).forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    setTagCounts(counts);
  }, []);

  const selectedTag = decodeURIComponent(
    location.pathname.startsWith("/list/")
      ? location.pathname.split("/list/")[1] || ""
      : ""
  );

  const sortedTags = Object.keys(tagCounts).sort((a, b) =>
    a.localeCompare(b, "ko")
  );

  const total = sortedTags.reduce((sum, tag) => sum + tagCounts[tag], 0);

  return (
    <div className="tag-container">
      <h3 className="tag-title">태그 목록</h3>
      <div className="tag-divider" />
      <div
        className={`tag-item ${selectedTag === "" ? "selected" : ""}`}
        onClick={() => navigate("/list")}
      >
        <span className="tag-name">전체보기 ({total})</span>
      </div>
      {sortedTags.map((tag) => (
        <div
          key={tag}
          className={`tag-item ${selectedTag === tag ? "selected" : ""}`}
          onClick={() => navigate(`/list/${encodeURIComponent(tag)}`)}
        >
          <span className="tag-name">
            {tag} ({tagCounts[tag]})
          </span>
          <span className="tag-count"></span>
        </div>
      ))}
    </div>
  );
}

export default Tags;
