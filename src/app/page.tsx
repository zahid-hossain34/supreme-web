import Fpl from "@/components/fpl";
import RecentGames from "@/components/recent-games";
import Statstics from "@/components/statstics";
import TrendingNews from "@/components/trending";

export default function Home() {
  return (
    <main className="flex flex-col">
      <RecentGames />
      <TrendingNews />
      <Fpl />
      <Statstics />
    </main>
  );
}
