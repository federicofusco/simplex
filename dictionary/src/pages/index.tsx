import HeroSearch from "@/common/components/hero/HeroSearch";
import HeroTitle from "@/common/components/hero/HeroTitle";

const Home = () => {
  return <div className="px-4 mt-16">
      <HeroTitle title="Simplex" />
      <div className="w-full flex justify-center">
        <HeroSearch />
      </div>
  </div>
}

export default Home;