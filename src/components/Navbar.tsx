import React from "react";
import Link from "next/link";
import data from "../data/site-content.json";

export default function Navbar() {
  const nav = data.site.nav;
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {data.site.title}
        </Link>
        <nav>
          <ul className="flex gap-6 text-sm text-(--color-text-secondary)">
            {nav.map((n) => (
              <li key={n}>
                <Link
                  href={
                    n.toLowerCase() === "home" ? "/" : `/${n.toLowerCase()}`
                  }
                  className="hover:underline"
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
