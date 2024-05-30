// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const PostsApi = createApi({
  reducerPath: 'PostsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/Posts' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: ()=> `/`,
    }),
    addpost:builder.mutation({
      query:(newPost)=>{
        return {
          url:`/`,
          method:'POST',
          body:newPost,
        }
      }
    }),
    deletepost:builder.mutation({
      query:(Postid)=>{
        return {
          url:`/${Postid}`,
          method:'DELETE',
        
        }
      }
    }),
    updatepost:builder.mutation({
      query:(Post)=>{
        return {
          url:`/${Post.id}`,
          method:'PUT',
          body:Post
        
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery,
  useAddpostMutation,
  useDeletepostMutation,
  useLazyGetAllPostsQuery,
  useUpdatepostMutation
} =PostsApi
