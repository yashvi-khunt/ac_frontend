import React from "react";
import data from "../data/site-content.json";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-6 text-center text-sm text-(--color-text-secondary)">
        {data.footer.text}
      </div>
    </footer>
  );
}
