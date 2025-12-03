import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fitness Coaching",
  description: "Clone of Wix fitness template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <Navbar />
          <div className="container flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
