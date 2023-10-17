"use client";
import { availabilityOptions } from "@/constants/global";
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { SelectOptions } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormSelectField from "./FormSelectField";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type FormValues = {
  name?: string;
  description?: string;
  price?: number;
  availability?: boolean;
  image?: string;
};

const UpdateService = ({ params }: any) => {
  const [selectedAvailability, setSelectedAvailability] = useState<string>();
  const { data } = useServiceQuery(params?.id);
  const service = data && data;
  console.log(service);

  const availability =
    service?.availability.toString().charAt(0).toUpperCase() +
    service?.availability.toString().slice(1);
  const availabilityId = {
    label: availability,
    value: availability,
  };
  const [updateService] = useUpdateServiceMutation();
  const router = useRouter();
  const form = useForm<FormValues>({});

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const price = Number(data.price);
    data["price"] = price || service?.price;
    data["availability"] =
      (selectedAvailability === "false" && false) ||
      (selectedAvailability === "true" && true);
    try {
      const res = await updateService({ id: params?.id, body: data }).unwrap();
      if (res?.id) {
        router.push("/admin/services");
        toast.success("Service Updated Successfully");
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="
              mx-auto mb-0 mt-8 space-y-4
              "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label className="my-2" title="name" htmlFor="name">
                Service Name
              </Label>
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                        disabled={isLoading}
                        placeholder="name"
                        {...field}
                        type="text"
                        defaultValue={service?.name}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Label className="my-2" title="description" htmlFor="description">
                Description
              </Label>
              <FormField
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Textarea
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                        disabled={isLoading}
                        placeholder="description"
                        {...field}
                        defaultValue={service?.description!}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
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
                        disabled={isLoading}
                        placeholder="price"
                        {...field}
                        type="text"
                        defaultValue={service?.price}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormSelectField
                name="availability"
                label="Availability"
                options={availabilityOptions as SelectOptions[]}
                handleChange={(el: any) => setSelectedAvailability(el)}
                defaultValue={availabilityId}
              />
            </div>
            <div>
              <Label className="my-2" title="image" htmlFor="image">
                Image
              </Label>
              <FormField
                name="image"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                        disabled={isLoading}
                        placeholder="image"
                        {...field}
                        type="text"
                        defaultValue={service?.image}
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
            disabled={isLoading}
            size="icon"
          >
            Update Service
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateService;
