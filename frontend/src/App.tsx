import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "@/App.css";
import Layout from "./pages/Layout";
import PostDetail from "./components/post/PostDetail";
import WritePost from "./components/post/WritePost";
import EditPost from "./components/post/EditPost";
import PostList from "./components/post/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/list" replace />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="write" element={<WritePost />} />
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="list" element={<PostList />} />
          <Route path="list/:tag" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
