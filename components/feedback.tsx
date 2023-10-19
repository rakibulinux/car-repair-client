"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { useAddFeedbackMutation } from "@/redux/api/feedbackApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Editor } from "./editor";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

type FeedbackProps = {
  serviceId: string;
};

type FormValues = {
  userId: string;
  serviceId: string;
  comment: string;
  suggestion: string;
};

const CreateFeedback = () => {
  const { userId } = getUserInfo() as IUserInfoType;
  const [addFeedback] = useAddFeedbackMutation();
  const router = useRouter();
  const form = useForm<FormValues>({});
  const { isSubmitting, isValid } = form.formState;

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data["userId"] = userId;
    console.log(data);
    try {
      const res = await addFeedback({ ...data }).unwrap();
      if (res?.id) {
        toast.success("Feedback Added Successfully");
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Card className="w-8/12 mx-auto my-4 text-start">
      <CardHeader>
        <CardTitle className="text-center">Add Your Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mb-0 mt-8 space-y-4"
          >
            <div className="">
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

              <div className="my-16">
                <Label className="my-2" title="suggestion" htmlFor="suggestion">
                  Suggestion
                </Label>
                <FormField
                  control={form.control}
                  name="suggestion"
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
            <CardFooter className="flex justify-center">
              <Button
                className="col-span-12 lg:col-span-12 w-full md:w-3/12"
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

export default CreateFeedback;
