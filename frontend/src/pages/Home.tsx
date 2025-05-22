import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import "@/css/Home.css";
import Menu from "../components/Menu";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (stored) {
      setPosts(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="body">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="contents-container">
          <h1>글 목록</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
