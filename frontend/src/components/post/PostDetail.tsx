import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../types/Post";
import { formatDateWithUpdated } from "@/utils/date";
import DOMPurify from "dompurify";
import postAPI from "../../api/post";
import { marked } from "marked";

import "@/css/post/PostDetail.css";
import { Viewer } from "@toast-ui/react-editor";

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await postAPI.getPost(Number(id));
        setPost(fetchedPost);
      } catch (error) {
        console.log("PostDetail.tsx에서 게시글불러오기 실패: ", error);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return <div>해당 글을 찾을 수 없습니다.</div>;
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm("글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await postAPI.deletePost(Number(id));
      alert("삭제되었습니다.");
      navigate("/");
    } catch (error) {
      alert("삭제 실패");
      console.log("삭제 실패: ", error);
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
      <div className="post-detail-info">
        작성일:{" "}
        {formatDateWithUpdated(
          post.updatedAt || post.createdAt,
          post.updatedAt !== post.createdAt
        )}
      </div>

      <div className="post-detail-content">
        <Viewer initialValue={post.content} />
      </div>
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
