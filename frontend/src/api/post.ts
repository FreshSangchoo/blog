import type { PostRequest } from "../types/Post";
import axiosInstance from "./axios";

// 전체 게시글 조회
const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get("/post");
    console.log("전체 게시글: ", response.data);
    return response.data;
  } catch (error) {
    console.log("전체 게시글 조회 실패: ", error);
  }
};

// 게시글 상세 조회
const getPost = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/post/${id}`);
    console.log("게시글: ", response.data);
    return response.data;
  } catch (error) {
    console.log("게시글 상세 조회 실패: ", error);
  }
};

// 게시글 작성
const createPost = async (post: PostRequest) => {
  try {
    const response = await axiosInstance.post("/post", post);
    console.log("게시글 작성 성공! ", response.data);
  } catch (error) {
    console.log("게시글 작성 실패: ", error);
  }
};

// 게시글 수정
const updatePost = async (id: number, post: PostRequest) => {
  try {
    const response = await axiosInstance.put(`/post/${id}`, post);
    console.log("게시글 수정 성공! ", response.data);
  } catch (error) {
    console.log("게시글 수정 실패: ", error);
  }
};

// 게시글 삭제
const deletePost = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/post/${id}`);
    console.log("게시글 삭제 성공! ", response.data);
  } catch (error) {
    console.log("게시글 삭제 실패: ", error);
  }
};

// ai post 생성
const generatePost = async (title: string, content: string) => {
  try {
    const response = await axiosInstance.post("/post/generate-post", {
      title,
      content,
    });
    console.log("AI 글 생성 성공: ", response.data);
    return response.data.markdown;
  } catch (error) {
    console.log("AI 글 생성 실패: ", error);
  }
};

export default {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  generatePost,
};
