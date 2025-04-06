import { Suspense } from "react";
import PostTable from "./posts/_components/PostTable";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/ui/Fallback";

function Profile() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-secondary-800">داشبورد</h1>

      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2 className="mb-4 text-lg font-medium text-secondary-800">
        لیست آخرین پست ها
      </h2>

      <Suspense fallback={<Fallback />}>
        <PostTable queries="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}
export default Profile;
