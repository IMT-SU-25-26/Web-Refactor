import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "./service-card";
import { Activity } from "@/types/db/activity";
import { truncateDescription } from "@/utils/truncate";

interface CommunityServicesSectionProps {
  latestActivities: Activity[];
}

export function CommunityServicesSection({ latestActivities }: CommunityServicesSectionProps) {
  return (
    <div className="flex relative z-3 w-screen pb-[10%] flex-col justify-start items-center">
      <h1 className="explore-text font-family-gill-condensed-bold font-extrabold text-6xl">
        EXPLORE OUR
      </h1>
      <h1 className="explore-text font-family-gill-condensed-bold font-extrabold text-6xl">
        COMMUNITY SERVICES
      </h1>
      <div className="home-service-card-container relative flex mt-14">
        {latestActivities.length > 0 && (
          <>
            <ServiceCard
              className="home-service-card-left absolute left-[25%] top-12 max-h-72"
              title={latestActivities[1]?.title || "No Activity"}
              type={latestActivities[1]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[1]?.description ||
                  "No description available"
              )}
              imageUrl={latestActivities[1]?.images?.[0]}
              color="#0555AB"
              opacity="75%"
            />
            <ServiceCard
              className="home-service-card-center relative z-10"
              title={latestActivities[0]?.title || "No Activity"}
              type={latestActivities[0]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[0]?.description ||
                  "No description available"
              )}
              imageUrl={latestActivities[0]?.images?.[0]}
              color="#0555AB"
              opacity="100%"
            />
            <ServiceCard
              className="home-service-card-right absolute right-[20%] top-12 max-h-72"
              title={latestActivities[2]?.title || "No Activity"}
              type={latestActivities[2]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[2]?.description ||
                  "No description available"
              )}
              imageUrl={latestActivities[2]?.images?.[0]}
              color="#0555AB"
              opacity="75%"
            />
          </>
        )}
        {latestActivities.length === 0 && (
          <>
            <ServiceCard
              className="home-service-card-left absolute left-[25%] top-12 max-h-72"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="75%"
            />
            <ServiceCard
              className="home-service-card-center relative z-10"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="100%"
            />
            <ServiceCard
              className="home-service-card-right absolute right-[20%] top-12 max-h-72"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="75%"
            />
          </>
        )}
      </div>
      <div className="relative flex justify-center items-center w-full h-full mt-20 sm:mt-40">
        <div className="explore-button absolute w-87.5 h-30 bg-[#0E54B2] p-4 px-8 rounded-2xl z-2">
          <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
            <Link href="/activities">
              <h1 className="explore-button-text font-family-impact text-6xl text-center text-white">
                EXPLORE
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="flex paper-cloud w-[20%] -top-20 h-auto absolute left-0"
        src={"/home/paper-cloud.webp"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
      <Image
        className="green-arrow-footer w-[15%] top-0 h-auto absolute right-0"
        src={"/home/green-arrow-home.png"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
      <Image
        className="red-star-footer-left w-[20%] top-[35%] h-auto absolute left-0 sm:flex hidden"
        src={"/home/orange-star-footer-left.png"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
    </div>
  );
}