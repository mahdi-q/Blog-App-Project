import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="my-20 text-center text-2xl font-bold text-secondary-800 md:text-5xl">
        اپلیکیشن مدیریت بلاگ ها
      </h1>

      <p className="mb-10 text-center text-lg leading-loose text-secondary-500">
        جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
        <br />
        بتونی بلاگ بسازی - کامنت بزاری و در پنلت همه اتفاقات رو رصد کنی!
      </p>

      <div className="flex w-full flex-row items-center justify-center gap-x-8">
        <Button variant="outline">
          <Link href="/blogs">مطالعه بلاگ ها</Link>
        </Button>

        <Button>
          <Link href="/profile">مدیریت بلاگ ها</Link>
        </Button>
      </div>
    </div>
  );
}
