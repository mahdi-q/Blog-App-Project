import { fetchCardsData } from "@/services/dashboardData";
import Card from "./Card";

async function CardsWrapper() {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardsData();

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-3">
      <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="نظرات" value={numberOfComments} type="comments" />
      <Card title="پست ها" value={numberOfPosts} type="posts" />
    </div>
  );
}
export default CardsWrapper;
