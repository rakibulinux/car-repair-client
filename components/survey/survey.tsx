import Link from "next/link";

const SurveyContent = () => {
  return (
    <div className="w-11/12 mx-auto bg-sky-500 p-8 rounded-lg text-white text-center my-4">
      <h2 className="text-3xl font-bold mb-4">Help us improve!</h2>
      <p className="text-lg mb-4">
        We want to make our service better for you. Please take a moment to fill
        out our survey.
      </p>
      <ul className="list-disc text-left">
        <li className="mb-2">Tell us what you like about our service.</li>
        <li className="mb-2">
          Tell us what you don not like about our service.
        </li>
        <li className="mb-2">Suggest improvements you would like to see.</li>
      </ul>
      <Link
        href="/survey"
        className="inline-block bg-white text-sky-500 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out mt-4"
      >
        Take Survey
      </Link>
    </div>
  );
};

export default SurveyContent;
