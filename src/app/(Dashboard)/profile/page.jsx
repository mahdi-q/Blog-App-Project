import { fetchCardsData } from "@/services/dashboardData";
import Card from "./_components/Card";
import PostTable from "./posts/_components/PostTable";

async function Profile() {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardsData();

  return (
    <div>
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card title="کاربران" value={numberOfUsers} type="users" />
        <Card title="نظرات" value={numberOfComments} type="comments" />
        <Card title="پست ها" value={numberOfPosts} type="posts" />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-secondary-800">
          لیست آخرین پست ها
        </h2>
        
        <PostTable queries="sort=latest&limit=5" />
      </div>
    </div>
  );
}
export default Profile;
