"use client";
import { availabilityOptions } from "@/constants/global";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { SelectOptions } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormSelectField from "../FormSelectField";
import Categories from "../categories";
import { Editor } from "../editor";
import { FileUpload } from "../file-upload";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormValues = {
  name: string;
  description: string;
  price: number;
  availability: "Available" | "Upcoming";
  image: string;
  categoryId: string;
};

const CreateService = () => {
  const [selectedCategory, setSelectedCategoryId] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedAvailability, setSelectedAvailability] = useState<
    "Available" | "Upcoming"
  >("Available");
  const [addService] = useAddServiceMutation();
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
      const res = await addService({ ...data }).unwrap();
      if (res?.id) {
        router.push("/admin/services");
        toast.success("Service Created Successfully");
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
          <div className="">
            <div className="my-4">
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
            <div className="my-4">
              <FormSelectField
                name="availability"
                label="Availability"
                options={availabilityOptions as SelectOptions[]}
                handleChange={(el: any) => setSelectedAvailability(el)}
              />
            </div>
            <div className="my-4">
              <Label className="my-2 text-right" title="image" htmlFor="image">
                Image
              </Label>
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="service image"
                  height={300}
                  width={900}
                />
              ) : (
                <FileUpload
                  endpoint="serviceAttachment"
                  onChange={(url) => {
                    if (url) {
                      onImageUpload({ image: url });
                    }
                  }}
                />
              )}
            </div>
            <div className="my-4">
              <Label className="my-2" title="categoryId" htmlFor="categoryId">
                Category
              </Label>
              <Categories
                name="categoryId"
                label="Category"
                setSelectedCategoryId={(el) => setSelectedCategoryId(el)}
              />
            </div>
            <div className="my-4">
              <Label className="my-2" title="description" htmlFor="description">
                Description
              </Label>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor {...field} />
                    </FormControl>
                    <FormMessage />
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
            Create Service
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateService;
