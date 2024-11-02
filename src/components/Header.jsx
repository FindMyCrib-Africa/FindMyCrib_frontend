"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import destroySession from "@/app/actions/destroySession";
import { useAuth } from "context/authContext";

export const NAV_LINKS = [
  { id: 1, link: "/properties/mylistings", label: "My Listings" },
  { id: 3, link: "/properties/add", label: "Add" },
  { id: 2, link: "/bookings", label: "Bookings" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogOut = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  };

  return (
    <header className="container text-black sticky top-0 left-0 z-10 py-4 md:px-8 bg-white ">
      <nav className="flex flex-col gap-3 md:gap-0 md:flex-row  md:items-center justify-between">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="w-12 h-12 bg-brand-background rounded-full flex items-center justify-center"
          >
            <Image
              priority
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
          {isAuthenticated && (
            <Button
              onClick={handleLogOut}
              className="md:hidden bg-brand-accent/60 text-white"
              variant={"default"}
            >
              Log out
            </Button>
          )}
          {!isAuthenticated && (
            <div className="flex gap-3 items-center">
              <Link
                href="/register"
                className="bg-brand-accent/60 text-white md:hidden  px-3 py-2 rounded-sm hover:bg-brand-accent/30"
                variant={"default"}
              >
                Register
              </Link>
              <Link
                href={"/login"}
                className="bg-brand-accent/60 text-white md:hidden  px-3 py-2 rounded-sm hover:bg-brand-accent/30"
                variant={"default"}
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="md:flex gap-4   md:w-[50%] ">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              className={cn(
                "transition-2 relative flex md:w-full md:justify-center md:rounded-full rounded-sm px-2 py-2 text-base font-medium capitalize ease-in-out hover:bg-brand-accent/60 hover:text-white",
                pathname === link.link
                  ? "border bg-brand-accent/60  text-white"
                  : "",
              )}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        {isAuthenticated && (
          <Button
            onClick={handleLogOut}
            className="bg-brand-accent/60 text-white hidden md:block"
            variant={"default"}
          >
            Log out
          </Button>
        )}

        {!isAuthenticated && (
          <div className="flex gap-3 items-center">
            <Link
              href="/register"
              className="bg-brand-accent/60 text-white hidden md:block px-3 py-2 rounded-sm hover:bg-brand-accent/30"
              variant={"default"}
            >
              Register
            </Link>
            <Link
              href={"/login"}
              className="bg-brand-accent/60 text-white hidden md:block px-3 py-2 rounded-sm hover:bg-brand-accent/30"
              variant={"default"}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
