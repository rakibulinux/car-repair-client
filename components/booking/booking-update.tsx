"use client";

import { useUpdateBookingMutation } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type BookingFormValues = {
  status: string;
};

const BookingUpdate = ({ params }: any) => {
  const { userId, role } = getUserInfo() as IUserInfoType;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormValues>({});
  const [updateBooking] = useUpdateBookingMutation();
  const router = useRouter();
  const onSubmit = async (formData: BookingFormValues) => {
    try {
      const response = await updateBooking({
        id: params?.id,
        body: formData,
      }).unwrap();
      if (response && response.id) {
        // Handle success, e.g., show a success message or redirect
        toast.success("Booking status update successfully");
      }
    } catch (error: any) {
      // Handle error, e.g., show an error message
      toast.error("Booking failed:", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Car Repair Booking</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-medium"
          >
            Status
          </label>
          <Controller
            name="status"
            control={control}
            defaultValue="PENDING"
            render={({ field }) => (
              <select
                {...field}
                className="form-select mt-1 block w-full"
                required
              >
                {role === "admin" ? (
                  <>
                    <option value="FIXING">FIXING</option>
                    <option value="FIXED">FIXED</option>
                  </>
                ) : (
                  <>
                    <option value="CANCELED">Selete</option>
                    <option value="CANCELED">CANCELED</option>
                  </>
                )}
              </select>
            )}
          />
          {errors.status && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Update Status
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingUpdate;
