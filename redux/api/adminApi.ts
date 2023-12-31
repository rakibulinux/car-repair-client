import { User } from "@/app/(dashboard)/(routes)/super_admin/admin/columns";
import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ADMIN_URL = "/users";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdmins: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${ADMIN_URL}/admins`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: User[], meta: IMeta) => ({
        admins: response,
        meta,
      }),
      providesTags: [tagTypes.admin],
    }),
    getSingleAdmin: build.query({
      query: (id: string) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    updateAdmin: build.mutation({
      query: ({ id, body }) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useGetAdminsQuery,
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
