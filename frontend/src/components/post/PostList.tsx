import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/css/post/PostList.css";
import type { Post } from "../../types/Post";
import postAPI from "../../api/post";
import { formatKoreanDate } from "@/utils/date";

function PostList() {
  const { tag } = useParams<{ tag: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await postAPI.getAllPosts();

        if (!tag) {
          setPosts(allPosts);
        } else {
          const filtered = allPosts.filter((post: Post) =>
            post.hashtags?.includes(tag)
          );
          setPosts(filtered);
        }
      } catch (error) {
        console.log("PostList.tsx에서 전체 게시글 불러오기 실패: ", error);
      }
    };

    fetchPosts();
  }, [tag]);

  return (
    <>
      <h1 className="post-list-type">{tag ? `#${tag}` : "전체 글 목록"}</h1>
      {posts.length === 0 ? (
        <p>작성된 글이 없습니다.</p>
      ) : (
        <ul className="post-list-container">
          {posts.map((post) => (
            <li key={post.id} className="post-list-detail-container">
              <div
                className="post-list-detail-title"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                {post.title}
              </div>
              <div className="post-list-detail-date">
                {formatKoreanDate(post.updatedAt || post.createdAt)}
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="button-container">
        <button className="write-button" onClick={() => navigate("/write")}>
          글쓰기
        </button>
      </div>
    </>
  );
}

export default PostList;
