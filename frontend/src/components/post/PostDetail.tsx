import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import DOMPurify from "dompurify";

import "@/css/post/PostDetail.css";
import Header from "../Header";

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");

    if (!stored) return;

    const parsed: Post[] = JSON.parse(stored);
    const found = parsed.find((p) => p.id === Number(id));
    setPost(found || null);
  }, [id]);

  if (!post) {
    return <div>해당 글을 찾을 수 없습니다.</div>;
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm("글을 삭제하시겠습니까?");

    if (confirmDelete) {
      const stored = JSON.parse(localStorage.getItem("posts") || "[]");
      const updated = stored.filter((p: Post) => p.id !== post.id);
      localStorage.setItem("posts", JSON.stringify(updated));

      alert("삭제되었습니다.");
      navigate("/");
    }
  };

  return (
    <div className="post-detail-container">
      <h1 className="post-detail-title">{post.title}</h1>
      {post.hashtags && post.hashtags.length > 0 && (
        <div className="post-detail-hashtags-container">
          {post.hashtags
            .slice()
            .sort((a, b) => a.localeCompare(b, "ko"))
            .map((tag, idx) => (
              <span
                key={idx}
                className="post-detail-hashtags"
                onClick={() => navigate(`/list/${tag}`)}
              >
                #{tag}
              </span>
            ))}
        </div>
      )}
      {typeof post.updatedAt === "string" ? (
        <div className="post-detail-info">작성일: {post.updatedAt}</div>
      ) : (
        <div className="post-detail-info">작성일: {post.createdAt}</div>
      )}

      <div
        className="post-detail-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
      ></div>
      <div className="post-detail-edit-container">
        <button onClick={() => navigate("/list")} className="button">
          목록
        </button>
        <button onClick={() => navigate(`/edit/${post.id}`)} className="button">
          수정
        </button>
        <button onClick={handleDelete} className="button">
          삭제
        </button>
      </div>
    </div>
  );
}

export default PostDetail;
