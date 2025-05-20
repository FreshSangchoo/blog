import { useRef, useState } from "react";
import "@/css/post/WritePost.css";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";

function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const navigate = useNavigate();
  const editorRef = useRef<HTMLDivElement>(null);

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

  const registPost = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    // const hour = today.getHours();
    // const minute = today.getMinutes();
    // const second = today.getSeconds();

    const createdAt = `${year}년 ${month}월 ${date}일`;
    console.log("오늘은 ", createdAt);

    const newPost = {
      id: Date.now(),
      title,
      content,
      createdAt,
    };

    const saved = JSON.parse(localStorage.getItem("posts") || "[]");
    localStorage.setItem("posts", JSON.stringify([newPost, ...saved]));

    navigate("/");
  };

  return (
    <div onPaste={handlePasteWrapper}>
      <h1>글 작성</h1>
      <div>
        <label>제목: </label>
        <input
          className="write-post-title-input"
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>내용</label>
        <div ref={editorRef}>
          <MDEditor value={content} onChange={setContent} />
        </div>
      </div>
      <div>
        <button onClick={registPost}>작성 완료</button>
      </div>
    </div>
  );
}

export default WritePost;
