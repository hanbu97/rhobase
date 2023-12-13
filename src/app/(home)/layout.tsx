import { Medal } from "lucide-react";
import { HeroBar } from "./_components/hero_bar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="flex h-full flex-col items-center justify-between p-24">
      <HeroBar />
      {children}
    </body>
  </html>
);

export default HomeLayout;
