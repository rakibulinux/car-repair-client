"use client";
import Loading from "@/app/loading";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Editor } from "./editor";
import { FileUpload } from "./file-upload";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { userId } = getUserInfo() as IUserInfoType;
  // const [selectedGender, setSelectedGender] = useState();
  // const [selectedBloodGroup, setSelectedBloodGroup] = useState();

  const onImageUpload = (data: any) => {
    setSelectedImage(data.profileImg);
  };
  // const handleGenderChange = (e: any) => {
  //   setSelectedGender(e?.target);
  // };

  // const handleBloodGroupChange = (e: any) => {
  //   setSelectedBloodGroup(e?.target);
  // };
  const { data, isLoading } = useGetSingleUserQuery(userId);
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues: {
      name: data?.name || "",
      bio: data?.profile?.bio || "",
      profileImg: data?.profile?.profileImg || selectedImage,
      gender: data?.profile?.gender || "Male", // Initialize with default value
      bloodGroup: data?.profile?.bloodGroup || "A+", // Initialize with default value
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  const { id, name, profile } = !!data && data;
  const gender =
    (profile &&
      profile?.gender?.toString().charAt(0).toUpperCase() +
        profile?.gender?.toString().slice(1)) ||
    "Male";
  const bloodGroup =
    (profile &&
      profile?.bloodGroup?.toString().charAt(0).toUpperCase() +
        profile?.bloodGroup?.toString().slice(1)) ||
    "A+";

  const genderId = {
    label: gender,
    value: gender,
  };
  //console.log(genderId);
  const bloodGroupId = {
    label: bloodGroup,
    value: bloodGroup,
  };
  //console.log(bloodGroupId);
  const formIsLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<FormValues> = async (values: any) => {
    values["profileImg"] = selectedImage;
    try {
      const res = await updateUser({ id, body: values }).unwrap();
      if (res?.id) {
        router.push(`${urlPath}`);
        toast.success("Profile Successfully");
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  // const bloodOptions = bloodGroupOptions?.map((bloodGroup) => {
  //   return {
  //     label: bloodGroup?.label,
  //     value: bloodGroup?.value,
  //   };
  // });

  return (
    <section className="flex items-center justify-center">
      <div className="w-full ">
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
            <div className="">
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
              <div className="my-10">
                <Label className="my-2" title="bio" htmlFor="bio">
                  Bio
                </Label>
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Editor
                          {...field}
                          defaultValue={
                            data?.profile?.bio && data?.profile?.bio
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label className="my-2" title="profileImg" htmlFor="profileImg">
                  Profile Picture
                </Label>
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="service image"
                    height={100}
                    width={200}
                  />
                ) : (
                  <FileUpload
                    endpoint="serviceAttachment"
                    onChange={(url) => {
                      if (url) {
                        onImageUpload({ profileImg: url });
                      }
                    }}
                  />
                )}
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
              {/* <div>
                <FormField
                  name="bloodGroup"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <FormSelectField
                          name="bloodGroup"
                          label="Blood Group"
                          options={bloodOptions as SelectOptions[]}
                          // value={selectedBloodGroup}
                          handleChange={handleBloodGroupChange}
                          defaultValue={bloodGroupId}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <FormSelectField
                          name="gender"
                          label="Gender"
                          options={genderOptions}
                          handleChange={handleGenderChange}
                          defaultValue={genderId}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div> */}
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
