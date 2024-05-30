import { configureStore } from "@reduxjs/toolkit";
import { PostsApi } from "../services/postsApi";
import counterReducer from '../features/counters/counterSlice'
import TodolistReducer from "../features/todolist/todolistSlice";
import { countriesApi } from "../services/countriesApi";
import { ProductsApi } from "../services/productsApi";

export const store = configureStore({
    reducer: {
        counterReducer,
        TodolistReducer,
        [PostsApi.reducerPath]:PostsApi.reducer,
        [countriesApi.reducerPath]:countriesApi.reducer,
        [ProductsApi.reducerPath]:ProductsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PostsApi.middleware,countriesApi.middleware,ProductsApi.middleware),
 

})