"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAddReviewMutation } from "@/redux/api/reviewApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Editor } from "./editor";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

type ReviewProps = {
  serviceId: string;
};

type FormValues = {
  userId: string;
  serviceId: string;
  rating: number;
  comment: string;
};
const Review = ({ serviceId }: ReviewProps) => {
  const { userId } = getUserInfo() as IUserInfoType;
  const [addReview] = useAddReviewMutation();
  const router = useRouter();
  const form = useForm<FormValues>({});
  const { isSubmitting, isValid } = form.formState;

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data["userId"] = userId;
    data["serviceId"] = serviceId;
    data["rating"] = Number(data.rating);
    console.log(data);
    try {
      const res = await addReview({ ...data }).unwrap();
      if (res?.id) {
        toast.success("Review Created Successfully");
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Card className="w-8/12 mx-auto my-4 text-start">
      <CardHeader>
        <CardTitle className="text-center">Add Your Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              mx-auto mb-0 mt-8 space-y-4
              "
          >
            <div className="">
              <div className="my-4">
                <Label className="my-2" title="rating" htmlFor="rating">
                  Rating
                </Label>
                <FormField
                  name="rating"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={!isValid || isSubmitting}
                          placeholder="We accept 0-5 Rating"
                          {...field}
                          type="number"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="my-4">
                <Label className="my-2" title="comment" htmlFor="comment">
                  Comment
                </Label>
                <FormField
                  control={form.control}
                  name="comment"
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
            <CardFooter className="flex justify-end">
              <Button
                className=" col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={!isValid || isSubmitting}
                size="icon"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Review;
