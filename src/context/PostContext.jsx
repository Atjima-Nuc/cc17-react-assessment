import { createContext, useState, useEffect } from "react";
import * as postsAPI from "../apis/postApi"

export const PostContext = createContext()

export default function PostContextProvider({children}) {
  const[posts, setPosts] = useState([])
  return <div>PostContext</div>;
}

export default PostContext;
