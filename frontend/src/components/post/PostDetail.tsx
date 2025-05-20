import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Post } from "../../types/Post";

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
    <div>
      <h1>{post.title}</h1>
      {typeof post.updatedAt === "string" ? (
        <div>{post.updatedAt}2</div>
      ) : (
        <div>{post.createdAt}1</div>
      )}
      <div>
        <button onClick={() => navigate("/")}>목록</button>
        <button onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default PostDetail;
