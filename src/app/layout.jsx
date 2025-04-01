import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import AppProviders from "@/providers/AppProviders";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning
        className={`${vazirFont.variable} font-sans`}
      >
        <AppProviders>
          <Toaster />

          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
