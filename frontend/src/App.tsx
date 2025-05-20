import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./components/post/PostDetail";
import WritePost from "./components/post/WritePost";
import EditPost from "./components/post/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
