import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function EditPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (stored) {
      const parsed: Post[] = JSON.parse(stored);
      const found = parsed.find((p: Post) => p.id === Number(id));
      if (found) {
        setPost(found);
        setTitle(found.title);
        // setContent(found.content || "");
      }
    }
  }, [id]);

  const handleSave = () => {
    const html = editorRef.current?.getInstance().getHTML();
    if (!title || !html) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("posts") || "[]");
    const today = new Date();
    const updatedAt = `${today.getFullYear()}년 ${
      today.getMonth() + 1
    }월 ${today.getDate()}일 (수정)`;

    const updated = stored.map((p: Post) =>
      p.id === Number(id) ? { ...p, title, content: html, updatedAt } : p
    );

    localStorage.setItem("posts", JSON.stringify(updated));
    alert("수정하였습니다.");
    navigate(`/post/${id}`);
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div className="edit-post-container">
      <h1>수정하기</h1>
      <div className="edit-post-title-container">
        <label>제목: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="edit-post-content-container">
        <label>내용</label>
        <Editor
          key={post.id} // 강제 리마운트용
          ref={editorRef}
          initialValue={post.content}
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      </div>
      <div className="edit-post-save-button-container">
        <button onClick={handleSave}>저장</button>
      </div>
    </div>
  );
}

export default EditPost;
