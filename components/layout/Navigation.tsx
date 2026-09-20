"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    href: "/",
    label: "Executive Readout",
  },
  {
    href: "/account-plan",
    label: "Account Plan",
  },
  {
    href: "/decision-matrix",
    label: "Decision Matrix",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 lg:px-8">
        {navigation.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 py-4 text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? "border-black font-medium text-black"
                  : "border-transparent text-black/50 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}