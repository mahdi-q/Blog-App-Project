import Table from "@/ui/Table";
import dateFormatter from "@/utils/dateFormatter";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/truncateText";

const typeStyles = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },

  premium: {
    label: "ویژه",
    className: "badge--primary",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{truncateText(title, 30)}</td>

      <td>{category.title}</td>

      <td>{author.name}</td>

      <td>{dateFormatter(createdAt)}</td>

      <td>
        <span className={`badge ${typeStyles[type].className}`}>
          {typeStyles[type].label}
        </span>
      </td>

      <td>actions</td>
    </Table.Row>
  );
}
export default PostRow;
