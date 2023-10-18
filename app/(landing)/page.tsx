import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import Post from "@/components/post";
import Service from "@/components/service";
import UpcomingService from "@/components/upcoming-service";

const LandingPage = () => {
  return (
    <div className="h-full bg-gray-300 dark:bg-gray-800">
      <LandingHero />
      <h2 className="text-4xl text-center font-bold my-2">Avaliable Service</h2>
      <Service />
      <h2 className="text-4xl text-center font-bold my-2">Upcoming Service</h2>
      <UpcomingService />
      <h2 className="text-4xl text-center font-bold my-2">Latest News</h2>
      <Post />
      <h2 className="text-4xl text-center font-bold my-2">Testimonials</h2>
      <LandingContent />
    </div>
  );
};

export default LandingPage;
