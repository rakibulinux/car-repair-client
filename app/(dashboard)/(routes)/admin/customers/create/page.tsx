import CreateUser from "@/components/create-user";

export default function Page() {
  return (
    <>
      <div className="text-gray-900 mx-auto max-w-lg text-center mb-10">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Create a Customer Account
        </h1>
      </div>
      <CreateUser buttonTitle="Create Customer" urlPath="/admin/customers" />;
    </>
  );
}
