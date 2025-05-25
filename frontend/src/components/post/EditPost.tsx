import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/css/post/EditPost.css";
import postAPI from "../../api/post";

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
    const fetchPost = async () => {
      try {
        const fetchedPost = await postAPI.getPost(Number(id));
        console.log("EditPost.tsx에서 getPost 성공");
        setPost(fetchedPost);
        setTitle(fetchedPost.title);
        setHashtags(fetchedPost.hashtags || []);
      } catch (error) {
        console.log("PostDetail.tsx에서 게시글불러오기 실패: ", error);
      }
    };

    if (id) fetchPost();
  }, [id]);

  const handleSave = async () => {
    const html = editorRef.current?.getInstance().getHTML();
    if (!title || !html) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      await postAPI.updatePost(Number(id), {
        title,
        content: html,
        hashtags,
      });

      alert("수정하였습니다.");
      navigate(`/post/${id}`);
    } catch (error) {
      console.error("게시글 수정 실패:", error);
      alert("게시글 수정에 실패했습니다.");
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
          {hashtags?.map((tag, idx) => (
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
          height="auto"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      </div>
      <div className="edit-post-save-button-container">
        <button onClick={handleSave} className="button">
          저장
        </button>
        <button onClick={() => navigate(-1)} className="button">
          취소
        </button>
      </div>
    </div>
  );
}

export default EditPost;
