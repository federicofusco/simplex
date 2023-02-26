import HeroSearch from "@/common/components/hero/HeroSearch";
import HeroTitle from "@/common/components/hero/HeroTitle";
import Meta from "@/common/components/navigation/Meta";
import { useContext, useEffect } from "react";
import NavigationContext from "@/common/lib/contexts/navigation";

const Home = () => {
  const { useSidebar } = useContext ( NavigationContext );
  useEffect (() => useSidebar (), [useSidebar]);

  return <>
    <Meta title="Simplex Dictionary - A logical language" description="Simplex is a logical language based on the ideals that languages should be as strai... blah blah blah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <div className="px-4 mt-16">
        <HeroTitle title="Simplex" />
        <div className="w-full flex justify-center">
          <HeroSearch />
        </div>
    </div>
  </>
}

export default Home;