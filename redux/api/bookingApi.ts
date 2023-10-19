import { IBooking, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all booking
    bookings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${BOOKING_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          booking: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    // get single booking
    booking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    // create a new booking
    addBooking: build.mutation({
      query: (data) => ({
        url: BOOKING_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    // update booking
    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    // delete booking
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation, // create
  useBookingsQuery, // get all
  useBookingQuery, // get single
  useUpdateBookingMutation, // update
  useDeleteBookingMutation: UseDeleteBookingMutation, // delete
} = bookingApi;
