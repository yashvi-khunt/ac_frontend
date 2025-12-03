import fs from "fs";
import path from "path";
import { SiteContent } from "@/types/site";

export default async function AboutPage() {
  // Read JSON on the server
  const filePath = path.join(process.cwd(), "src/data/site-content.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const content: SiteContent = JSON.parse(raw);

  const about = content.sections.find((s) => s.id === "about");

  return (
    <div className="py-12 container">
      <h1 className="text-3xl font-bold">{about?.title ?? "About"}</h1>
      <p className="mt-4 text-(--color-text-secondary)">{about?.description}</p>
    </div>
  );
}
