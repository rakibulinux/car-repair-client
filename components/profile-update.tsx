"use client";
import Loading from "@/app/loading";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SelectForm from "./select";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type FormValues = {
  address: string;
  bio: string;
  bloodGroup: string;
  gender: string;
  name: string;
  phoneNo: string;
  profileImg: string;
};

type IProfileUpdateProps = {
  urlPath: string;
};
const ProfileUpdate = ({ urlPath }: IProfileUpdateProps) => {
  const { userId } = getUserInfo() as IUserInfoType;
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("A+");

  const handleGenderChange = (e: any) => {
    setSelectedGender(e.target.value);
  };

  const handleBloodGroupChange = (e: any) => {
    setSelectedBloodGroup(e.target.value);
  };
  const { data, isLoading } = useGetSingleUserQuery(userId);
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();

  const form = useForm<FormValues>({});
  if (isLoading) {
    return <Loading />;
  }
  const { id, name, profile } = data;

  const formIsLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<FormValues> = async (values: any) => {
    values["gender"] = selectedGender;
    values["bloodGroup"] = selectedBloodGroup;
    try {
      const res = await updateUser({ id, body: values }).unwrap();
      if (res?.id) {
        router.push(`${urlPath}`);
        toast.success("Profile Successfully");
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="w-full px-2 py-12 sm:px-2 sm:py-16 lg:px-2 lg:py-24">
        <div className="text-gray-900 mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Update Your Profile
          </h1>
        </div>

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
                  Name
                </Label>
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={formIsLoading}
                          placeholder="name"
                          {...field}
                          type="text"
                          //   value={name}
                          defaultValue={name}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="bio" htmlFor="bio">
                  Bio
                </Label>
                <FormField
                  name="bio"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Textarea
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={formIsLoading}
                          placeholder="bio"
                          {...field}
                          defaultValue={data?.profile?.bio}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="profileImg" htmlFor="profileImg">
                  Profile Picture
                </Label>
                <FormField
                  name="profileImg"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={formIsLoading}
                          placeholder="profileImg"
                          {...field}
                          type="text"
                          defaultValue={data?.profile?.profileImg}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="phoneNo" htmlFor="phoneNo">
                  PhoneNo
                </Label>
                <FormField
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={formIsLoading}
                          placeholder="phoneNo"
                          {...field}
                          type="text"
                          defaultValue={data?.profile?.phoneNo}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="address" htmlFor="address">
                  Address
                </Label>
                <FormField
                  name="address"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2"
                          disabled={formIsLoading}
                          placeholder="address"
                          {...field}
                          type="text"
                          defaultValue={data?.profile?.address}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="bloodGroup" htmlFor="bloodGroup">
                  bloodGroup
                </Label>
                <FormField
                  name="bloodGroup"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <SelectForm
                          label="Blood Group"
                          options={bloodGroupOptions}
                          value={selectedBloodGroup}
                          onChange={handleBloodGroupChange}
                          defaultValue={data?.profile?.bloodGroup}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="gender" htmlFor="gender">
                  Gender
                </Label>
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <SelectForm
                          label="Gender"
                          options={genderOptions}
                          value={selectedGender}
                          onChange={handleGenderChange}
                          defaultValue={data?.profile?.gender}
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
              disabled={formIsLoading}
              size="icon"
            >
              Update Profile
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ProfileUpdate;
