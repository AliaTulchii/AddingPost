import { configureStore } from "@reduxjs/toolkit";
import postsReduser from "features/posts/postsSlice";


export const store = configureStore({
    reducer: {
        posts: postsReduser,
    }
})