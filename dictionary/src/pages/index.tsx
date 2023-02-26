import HeroSearch from "@/common/components/hero/HeroSearch";
import HeroTitle from "@/common/components/hero/HeroTitle";
import { useContext, useEffect } from "react";
import NavigationContext from "@/common/lib/contexts/navigation";

const Home = () => {
  const { useSidebar } = useContext ( NavigationContext );
  useEffect (() => useSidebar (), [useSidebar]);

  return <div className="px-4 mt-16">
      <HeroTitle title="Simplex" />
      <div className="w-full flex justify-center">
        <HeroSearch />
      </div>
  </div>
}

export default Home;