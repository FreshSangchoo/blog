import { useRef, useState } from "react";
import "@/css/post/WritePost.css";
import { useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function WritePost() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);

  const registPost = () => {
    const content = editorRef.current?.getInstance().getMarkdown();

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
    <div className="wirte-post-container">
      <h1>게시글 작성</h1>
      <div className="write-post-title-container">
        <input
          className="write-post-title-input"
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="write-post-content-container">
        <Editor
          ref={editorRef}
          initialValue=" "
          previewStyle="vertical"
          height="400px"
          initialEditType="WYSIWYG"
          useCommandShortcut={true}
        />
      </div>
      <div className="write-post-save-button-container">
        <button onClick={registPost}>등록</button>
      </div>
    </div>
  );
}

export default WritePost;
