import ProfileUpdate from "@/components/profile-update";

const UpdateProfilePage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <ProfileUpdate urlPath="/admin/profile" />
    </div>
  );
};

export default UpdateProfilePage;
