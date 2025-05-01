"use client";

import { useAuth } from "@/contexts/AuthContext";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <header
      className={`sticky top-0 z-10 mb-10 border-b border-b-secondary-300 bg-inherit bg-secondary-0 shadow-md transition-all duration-200 ${isLoading ? "opacity-70 blur-sm" : "opacity-100 blur-none"}`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink path={navLink.path}>{navLink.children}</NavLink>
              </li>
            ))}
          </div>

          <li>
            {isAuthenticated ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
