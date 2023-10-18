import { IMeta, IReview } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all reviews
    reviews: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${REVIEW_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IReview[], meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.reviews],
    }),
    // get single review
    review: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
    // create a new review
    addReview: build.mutation({
      query: (data) => ({
        url: REVIEW_URL,
        method: "REVIEW",
        data,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),
    // update review
    updateReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),
    // delete review
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.reviews],
    }),
  }),
});

export const {
  useAddReviewMutation, // create
  useReviewsQuery, // get all
  useReviewQuery, // get single
  useUpdateReviewMutation, // update
  useDeleteReviewMutation: UseDeleteReviewMutation, // delete
} = reviewApi;
