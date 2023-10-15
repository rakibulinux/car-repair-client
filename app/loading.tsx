import { Progress } from "@/components/ui/progress";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Progress value={33} />
    </div>
  );
};

export default Loading;
