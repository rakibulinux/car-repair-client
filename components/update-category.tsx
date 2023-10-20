"use client";
import {
  useCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoriesApi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormValues = {
  name: string;
};

const UpdateCategory = ({ params }: any) => {
  const [updateCategory] = useUpdateCategoryMutation();
  const router = useRouter();
  const { data } = useCategoryQuery(params?.id);
  const form = useForm<FormValues>({});

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    //console.log(data);
    try {
      const res = await updateCategory({ id: params?.id, body: data }).unwrap();
      //console.log(res);
      if (res?.id) {
        router.push("/admin/categories");
        toast.success("Category Updated Successfully");
      }
    } catch (error) {
      console.log(`${error}`);
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
                Category Name
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
                        defaultValue={data?.name}
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
            Update Category
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCategory;
