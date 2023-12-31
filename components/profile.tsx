import Loading from "@/app/loading";
import myPic from "@/assets/my-bg2.png";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Preview } from "./preview";

const Profile = () => {
  const { userId } = getUserInfo() as IUserInfoType;

  const { data, isLoading } = useGetSingleUserQuery(userId);
  if (isLoading) {
    return <Loading />;
  }
  const { id, name, email, profile } = data;

  return (
    <div className="px-6 w-11/12 mx-auto">
      <div className="flex flex-wrap justify-end">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <Image
            src={(profile && profile.profileImg) || myPic}
            alt="My Profile Image"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <Link href={`/super_admin/profile/edit/${id}`}>
              <button
                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center my-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {name}
        </h3>
        <div className="flex gap-4 text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <MapPin className="mr-2 text-lg text-gray-400" />
          {profile?.address || "Update Your Address"}
        </div>
        <div className="flex gap-4 mb-2 text-blueGray-600">
          <Mail className="mr-2 text-lg text-gray-400" />
          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          {email}
        </div>
        <div className="flex gap-4 mb-2 text-blueGray-600">
          <Phone />
          {profile?.phoneNo || "Update Your Address"}
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <Preview value={profile?.bio || "Update Your Boi"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
