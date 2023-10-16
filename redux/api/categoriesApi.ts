import { ICategory, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORIES_URL = "/categories";
export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all categories
    categories: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${CATEGORIES_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICategory[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.categories],
    }),
    // get single categories
    category: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.categories],
    }),
    // create a new categories
    addCategory: build.mutation({
      query: (data) => ({
        url: CATEGORIES_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.categories],
    }),
    // update categories
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORIES_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.categories],
    }),
    // delete categories
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.categories],
    }),
  }),
});

export const {
  useAddCategoryMutation, // create
  useCategoryQuery, // get single
  useCategoriesQuery, // get all
  useUpdateCategoryMutation, // update
  useDeleteCategoryMutation, // delete
} = categoriesApi;
