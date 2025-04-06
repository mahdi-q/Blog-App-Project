import ProfileHeader from "./profile/_components/ProfileHeader";
import ProfileSidebar from "./profile/_components/ProfileSidebar";

export const metadata = {
  title: "پروفایل",
  discription: "پنل مدیریت کاربر",
};

function ProfileLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-12 bg-secondary-0">
      {/* Sidebar */}
      <aside className="col-span-12 hidden px-4 lg:col-span-3 lg:block xl:col-span-2">
        <ProfileSidebar />
      </aside>

      {/* Body */}
      <div className="col-span-12 flex h-screen flex-col lg:col-span-9 xl:col-span-10">
        {/* Header */}
        <ProfileHeader />

        {/* Content */}
        <main className="flex-1 overflow-y-auto rounded-t-2xl bg-secondary-100 p-4 md:p-6 lg:rounded-t-none lg:rounded-tr-3xl lg:p-8">
          <div className="xl:max-w-screen-xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
export default ProfileLayout;
