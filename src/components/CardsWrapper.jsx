import { toPersianNumbers } from "@/utils/toPersianNumbers";

async function CardsWrapper({ cards }) {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="rounded-xl bg-secondary-200 p-2 shadow-sm">
          <div className="flex items-center gap-2 p-4 text-secondary-600">
            {card.icon}

            <h3 className="text-sm font-medium">{card.title}</h3>
          </div>

          <p className="truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500">
            {toPersianNumbers(card.value)}
          </p>
        </div>
      ))}

      {/* <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="نظرات" value={numberOfComments} type="comments" />
      <Card title="پست ها" value={numberOfPosts} type="posts" /> */}
    </div>
  );
}
export default CardsWrapper;
