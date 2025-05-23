import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/css/post/EditPost.css";

function EditPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [hashtagInput, setHashtagInput] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
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
        setHashtags(found.hashtags);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && hashtagInput.trim()) {
      const tag = hashtagInput.trim().replace(/^#*/, "");
      if (!hashtags.includes(tag)) {
        setHashtags([...hashtags, tag]);
      }
      setHashtagInput("");
      e.preventDefault();
    } else if (e.key === "Backspace" && !hashtagInput && hashtags.length > 0) {
      setHashtags(hashtags.slice(0, hashtags.length - 1));
    }
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div className="edit-post-container">
      <h1 className="edit-post-title">게시글 수정</h1>
      <div className="edit-post-title-container">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="edit-post-title-input"
        />
        <div className="edit-post-divider" />
        <div className="write-post-hashtag-container">
          {hashtags.map((tag, idx) => (
            <span key={idx} className="write-post-hashtag-chip">
              #{tag}
              <button
                type="button"
                className="write-post-hashtag-remove"
                onClick={() => {
                  setHashtags(hashtags.filter((_, i) => i !== idx));
                }}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            value={hashtagInput}
            className="write-post-hashtag-input"
            onChange={(e) => setHashtagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="#해시태그를 입력해 주세요."
          />
        </div>
      </div>
      <div className="edit-post-content-container">
        <Editor
          key={post.id}
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
