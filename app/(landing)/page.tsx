import ServiceCategory from "@/components/events-category/event-category";
import { FeedbackContent } from "@/components/feedback-content";
import { LandingHero } from "@/components/landing-hero";
import Post from "@/components/post";
import CarRepairBookingOverview from "@/components/service/car-repair-booking-overview";
import Service from "@/components/service/service";
import UpcomingService from "@/components/service/upcoming-service";
import SurveyContent from "@/components/survey/survey";

const LandingPage = async () => {
  return (
    <div className="h-full bg-gray-300 dark:bg-gray-800">
      <LandingHero />
      <h2 className="text-4xl text-center font-bold my-2">Avaliable Service</h2>
      <Service />
      <h2 className="text-4xl text-center font-bold my-2">Upcoming Service</h2>
      <UpcomingService />
      <h2 className="text-4xl text-center font-bold my-2">Latest News</h2>
      <Post />
      <h2 className="text-4xl text-center font-bold my-2">Client Review</h2>
      <FeedbackContent />
      <h2 className="text-4xl text-center font-bold my-2">
        Events by Category
      </h2>
      <ServiceCategory />
      <h2 className="text-4xl text-center font-bold my-2">Overview</h2>
      <CarRepairBookingOverview />
      <h2 className="text-4xl text-center font-bold my-2">Survey</h2>
      <SurveyContent />
    </div>
  );
};

export default LandingPage;
