import Fpl from "@/components/fpl";
import RecentGames from "@/components/recent-games";
import TrendingNews from "@/components/trending";

export default function Home() {
  return (
    <main className="flex flex-col">
      <RecentGames />
      <Fpl />
      <TrendingNews />
    </main>
  );
}
