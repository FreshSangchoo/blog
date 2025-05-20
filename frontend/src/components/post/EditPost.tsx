import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function EditPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");

    if (stored) {
      const parsed: Post[] = JSON.parse(stored);
      const found = parsed.find((p: Post) => p.id === Number(id));

      if (found) {
        setPost(found);
        setTitle(found.title);
        setContent(found.content);
      }
    }
  }, [id]);

  const handleSave = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("posts") || "[]");

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const updatedAt = `(수정) ${year}년 ${month}월 ${date}일`;

    const updated = stored.map((p: Post) =>
      p.id === Number(id) ? { ...p, title, content, updatedAt } : p
    );

    localStorage.setItem("posts", JSON.stringify(updated));
    alert("수정하였습니다.");
    navigate(`/post/${id}`);
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>수정하기</h1>
      <div>
        <label>제목: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>내용</label>
        <MDEditor value={content} onChange={setContent} />
      </div>
      <div>
        <button onClick={handleSave}>저장</button>
      </div>
    </div>
  );
}

export default EditPost;
