import { IFeedback, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FEEDBACK_URL = "/feedbacks";
export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all feedback
    feedbacks: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FEEDBACK_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFeedback[], meta: IMeta) => {
        return {
          feedback: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
    // get single feedback
    feedback: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
    // create a new feedback
    addFeedback: build.mutation({
      query: (data) => ({
        url: FEEDBACK_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    // update feedback
    updateFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    // delete feedback
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useAddFeedbackMutation, // create
  useFeedbacksQuery, // get all
  useFeedbackQuery, // get single
  useUpdateFeedbackMutation, // update
  useDeleteFeedbackMutation: UseDeleteFeedbackMutation, // delete
} = feedbackApi;
