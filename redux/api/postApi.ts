import { IMeta, IPost } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const POST_URL = "/posts";
export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all posts
    posts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${POST_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IPost[], meta: IMeta) => {
        return {
          posts: response,
          meta,
        };
      },
      providesTags: [tagTypes.posts],
    }),
    // get single post
    post: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${POST_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.posts],
    }),
    // create a new post
    addPost: build.mutation({
      query: (data) => ({
        url: POST_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.posts],
    }),
    // update post
    updatePost: build.mutation({
      query: (data) => ({
        url: `${POST_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.posts],
    }),
    // delete post
    deletePost: build.mutation({
      query: (id) => ({
        url: `${POST_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.posts],
    }),
  }),
});

export const {
  useAddPostMutation, // create
  usePostsQuery, // get all
  usePostQuery, // get single
  useUpdatePostMutation, // update
  useDeletePostMutation: UseDeletePostMutation, // delete
} = postApi;
