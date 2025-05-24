export interface Post {
  id: number;
  title: string;
  content: string;
  hashtags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PostRequest {
  title: string;
  content: string;
  hashtags: string[];
}
