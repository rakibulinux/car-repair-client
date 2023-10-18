"use client";

import { useAddReviewMutation } from "@/redux/api/reviewApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Categories from "./categories";
import { Editor } from "./editor";
import { FileUpload } from "./file-upload";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormValues = {
  title: string;
  content: string;
  image: string;
  authorId: string;
  categoryId: string;
};

const CreateReview = () => {
  const [selectedCategory, setSelectedCategoryId] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { userId } = getUserInfo() as IUserInfoType;
  const [addReview] = useAddReviewMutation();
  const form = useForm<FormValues>({});
  const { isSubmitting, isValid } = form.formState;
  const onImageUpload = (data: any) => {
    setSelectedImage(data.image);
  };
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data["categoryId"] = selectedCategory;
    data["authorId"] = userId;
    data["image"] = selectedImage;
    console.log(data);
    try {
      const res = await addReview({ ...data }).unwrap();
      if (res?.id) {
        // router.push("/admin/reviews");
        toast.success("Review Added Successfully");
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
              <Label className="my-2" title="title" htmlFor="title">
                Review Title
              </Label>
              <FormField
                name="title"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                        disabled={!isValid || isSubmitting}
                        placeholder="title"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-4">
              <Label className="my-2 text-right" title="image" htmlFor="image">
                Image
              </Label>
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="review image"
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
              <Label className="my-2" title="content" htmlFor="content">
                Content
              </Label>
              <FormField
                control={form.control}
                name="content"
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
            Create Review
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateReview;
