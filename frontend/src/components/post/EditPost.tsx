import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@/css/post/EditPost.css";

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

    const updatedAt = `${year}년 ${month}월 ${date}일 (수정) `;

    const updated = stored.map((p: Post) =>
      p.id === Number(id) ? { ...p, title, content, updatedAt } : p
    );

    localStorage.setItem("posts", JSON.stringify(updated));
    alert("수정하였습니다.");
    navigate(`/post/${id}`);
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  const handlePaste = async (event: ClipboardEvent) => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      const file = item.getAsFile();
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          const markdown = `![붙여넣은 이미지](${imageUrl})`;

          setContent((prev) => (prev || "") + `\n\n` + markdown);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handlePasteWrapper = (e: React.ClipboardEvent<HTMLDivElement>) => {
    handlePaste(e.nativeEvent);
  };

  return (
    <div className="edit-post-container" onPaste={handlePasteWrapper}>
      <h1>수정하기</h1>
      <div className="edit-post-title-container">
        <label>제목: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="edit-post-content-container">
        <label>내용</label>
        <MDEditor value={content} onChange={setContent} />
      </div>
      <div className="edit-post-save-button-container">
        <button onClick={handleSave} className="edit-post-save-button">
          저장
        </button>
      </div>
    </div>
  );
}

export default EditPost;
