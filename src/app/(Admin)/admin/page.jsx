import { Suspense } from "react";
// import PostTable from "./posts/_components/PostTable";
import Fallback from "@/ui/Fallback";
import CardsWrapper from "@/components/CardsWrapper";
import { fetchAdminCardsData } from "@/services/dashboardData";
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

async function Profile() {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchAdminCardsData();

  const cards = [
    {
      title: "کاربران",
      value: numberOfUsers,
      icon: <UserGroupIcon className="h-5 w-5" />,
    },
    {
      title: "نظرات",
      value: numberOfComments,
      icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />,
    },
    {
      title: "پست ها",
      value: numberOfPosts,
      icon: <DocumentIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-secondary-800">داشبورد</h1>

      <Suspense fallback={<Fallback />}>
        <CardsWrapper cards={cards} />
      </Suspense>

      <h2 className="mb-4 text-lg font-medium text-secondary-800">
        لیست آخرین پست ها
      </h2>

      <Suspense fallback={<Fallback />}>
        {/* <PostTable queries="sort=latest&limit=5" /> */}
      </Suspense>
    </div>
  );
}
export default Profile;
