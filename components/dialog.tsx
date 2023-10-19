"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormValues = {
  name: string;
  description: string;
  price: number;
  availability: "Available" | "Upcoming";
  image: string;
  categoryId: string;
};
type DialogProps = {
  title: string;
};

const DialogBooking = ({ title }: DialogProps) => {
  const { userId } = getUserInfo() as IUserInfoType;
  const { data } = useGetSingleUserQuery(userId);
  console.log(data);
  const [selectedCategory, setSelectedCategoryId] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedAvailability, setSelectedAvailability] = useState<
    "Available" | "Upcoming"
  >("Available");
  const [addBooking] = useAddBookingMutation();
  const router = useRouter();
  const form = useForm<FormValues>({});
  const { isSubmitting, isValid } = form.formState;
  const onImageUpload = (data: any) => {
    setSelectedImage(data.image);
  };
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const price = Number(data.price);

    data["categoryId"] = selectedCategory;
    data["image"] = selectedImage;
    data["price"] = price;
    data["availability"] = selectedAvailability;
    try {
      const res = await addBooking({ ...data }).unwrap();
      if (res?.id) {
        router.push("/admin/services");
        toast.success("Booking Created Successfully");
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Car Repair Booking</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you\re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              mx-auto mb-0 mt-8 space-y-4
              "
          >
            <div className="">
              <div className="my-4">
                <Label className="my-2" title="name" htmlFor="name">
                  Booking Name
                </Label>
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={!isValid || isSubmitting}
                          placeholder="name"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="my-4">
                <Label className="my-2" title="Price" htmlFor="price">
                  Price
                </Label>
                <FormField
                  name="price"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={!isValid || isSubmitting}
                          placeholder="price"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              className=" col-span-12 lg:col-span-2 w-full"
              type="submit"
              disabled={!isValid || isSubmitting}
              size="icon"
            >
              Create Booking
            </Button>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBooking;
