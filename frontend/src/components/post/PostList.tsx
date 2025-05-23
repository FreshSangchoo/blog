import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/css/post/PostList.css";
import type { Post } from "../../types/Post";

function PostList() {
  const { tag } = useParams<{ tag: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (!stored) return;

    const allPosts: Post[] = JSON.parse(stored);

    if (!tag) {
      setPosts(allPosts);
    } else {
      const filtered = allPosts.filter((post) => post.hashtags?.includes(tag));
      setPosts(filtered);
    }
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
                {post.updatedAt ? post.updatedAt : post.createdAt}
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
