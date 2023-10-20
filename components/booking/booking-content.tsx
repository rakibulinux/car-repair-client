import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type BookingProps = {
  serviceId: string;
};

type BookingFormValues = {
  make: string;
  model: string;
  manufactureYear: string;
  date: string;
  time: string;
  serviceId: string;
  userId: string;
};

const BookingContent = ({ serviceId }: BookingProps) => {
  const { userId, role } = getUserInfo() as IUserInfoType;
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormValues>({
    defaultValues: {
      serviceId,
      userId,
    },
  });
  const [addBooking] = useAddBookingMutation();

  const onSubmit = async (formData: BookingFormValues) => {
    try {
      const response = await addBooking(formData).unwrap();
      if (response && response.id) {
        // Handle success, e.g., show a success message or redirect
        toast.success("Booking successfully placed");
        router.push(`/service/${serviceId}`);
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
            htmlFor="make"
            className="block text-gray-700 text-sm font-medium"
          >
            Make
          </label>
          <Controller
            name="make"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="form-input mt-1 block w-full"
                placeholder="Make of the vehicle (e.g., Toyota, Honda)"
                required
              />
            )}
          />
          {errors.make && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="model"
            className="block text-gray-700 text-sm font-medium"
          >
            Model
          </label>
          <Controller
            name="model"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="form-input mt-1 block w-full"
                placeholder="Model of the vehicle (e.g., Camry, Civic)"
                required
              />
            )}
          />
          {errors.model && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="manufactureYear"
            className="block text-gray-700 text-sm font-medium"
          >
            Manufacture Year
          </label>
          <Controller
            name="manufactureYear"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="form-input mt-1 block w-full"
                placeholder="Manufacture Year"
                required
              />
            )}
          />
          {errors.manufactureYear && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-medium"
          >
            Date
          </label>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="date"
                {...field}
                className="form-input mt-1 block w-full"
                required
              />
            )}
          />
          {errors.date && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 text-sm font-medium"
          >
            Time
          </label>
          <Controller
            name="time"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="time"
                {...field}
                className="form-input mt-1 block w-full"
                required
              />
            )}
          />
          {errors.time && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingContent;
