"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFeedbacksQuery } from "@/redux/api/feedbackApi";
import { Preview } from "./preview";

export const FeedbackContent = () => {
  const { data } = useFeedbacksQuery({});
  // const {} = useGet
  const testimonials = data && data.feedback;
  return (
    <div className="px-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials &&
          testimonials?.map((item) => (
            <Card key={item.id} className="border-none p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.user.name}</p>
                    <p className="text-zinc-400 text-lg">{item.user.role}</p>
                    <p className=""></p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <div>
                    <p>Suggestion</p>
                    <Preview value={item.suggestion} />
                  </div>
                  <div>
                    <p>Comment</p>
                    <Preview value={item.comment} />
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
  );
};
