"use client";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { registerSchema } from "@/schema/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const AdminCreate = () => {
  const [userRegister] = useUserRegisterMutation();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userRegister({ ...data }).unwrap();
      console.log(res);
      if (res?.id) {
        router.push("/super_admin/admin");
        toast.success("Admin Created Successfully");
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="text-gray-900 mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Create an Admin Acount
          </h1>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              mx-auto mb-0 mt-8 max-w-md space-y-4
              "
          >
            <Label className="my-2" title="Name" htmlFor="name">
              Name
            </Label>
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                      disabled={isLoading}
                      placeholder="Name"
                      {...field}
                      type="name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Label className="my-2" title="Email" htmlFor="email">
              Email
            </Label>
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                      disabled={isLoading}
                      placeholder="Email"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Label className="my-2" title="role" htmlFor="role">
              Role
            </Label>
            <FormField
              name="role"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                      disabled={isLoading}
                      placeholder="role"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Label className="my-2" title="Password" htmlFor="password">
              Password
            </Label>
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                      disabled={isLoading}
                      placeholder="Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className=" col-span-12 lg:col-span-2 w-full"
              type="submit"
              disabled={isLoading}
              size="icon"
            >
              Create Admin
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AdminCreate;
