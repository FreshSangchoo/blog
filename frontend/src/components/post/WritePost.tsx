import { useEffect, useRef, useState } from "react";
import "@/css/post/WritePost.css";
import { useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import postAPI from "../../api/post";

function WritePost() {
  const [title, setTitle] = useState("");
  const [hashtagInput, setHashtagInput] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const hasUnsaveChanges = title || hashtags.length > 0 || content.trim();

    if (hasUnsaveChanges) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [title, hashtags, content]);

  const registPost = async () => {
    const content = editorRef.current?.getInstance().getMarkdown();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newPost = {
      title,
      content,
      hashtags,
    };

    try {
      await postAPI.createPost(newPost);
      alert("게시글이 등록되었습니다.");
      navigate("/list");
    } catch (error) {
      console.log("WritePost.tsx에서 registPost 실패: ", error);
    }
  };

  const generatePost = async () => {
    if (!title.trim()) {
      alert("제목은 필수입니다.");
      return;
    }

    try {
      const markdown = await postAPI.generatePost(title, content);

      if (markdown) {
        editorRef.current?.getInstance().setMarkdown(markdown);
        setContent(markdown);
      }
    } catch (error) {
      console.log("generatePost 실패: ", error);
    }
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

  return (
    <div className="write-post-container">
      <h1 className="write-post-title">게시글 작성</h1>
      <div className="write-post-title-container">
        <input
          className="write-post-title-input"
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="write-post-divider" />
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
      <div className="write-post-content-container">
        <Editor
          ref={editorRef}
          initialValue=" "
          previewStyle="vertical"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() => {
            const value = editorRef.current?.getInstance().getMarkdown();
            setContent(value || "");
          }}
        />
      </div>
      <div className="write-post-save-button-container">
        <button onClick={generatePost} className="button">
          AI 글 생성
        </button>
        <button onClick={registPost} className="button">
          등록
        </button>
        <button onClick={() => navigate(-1)} className="button">
          취소
        </button>
      </div>
    </div>
  );
}

export default WritePost;
