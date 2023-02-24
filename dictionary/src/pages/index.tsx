import Logo from "@/common/components/navigation/Logo";
import { ReactNode } from "react";

const HeroTitle = () => {
  return <div className="flex justify-center">
    <Logo height={ 48 } width={ 48 } />
    <h1 className="text-4xl my-auto ml-5 font-bold">Simplex</h1>
  </div>
}

const HeroSearch = () => {
  return <div className="border border-gray-300 rounded-sm flex justify-center mt-8 w-full max-w-md">
    <input 
      placeholder="Click or press 'S' to search" 
      type="text" 
      className="w-full p-2 outline-none"
    />
    <button className="p-2 text-gray-400 border-l border-gray-300 hover:bg-gray-100">Search</button>
  </div>
}

const Home = () => {
  return <div className="px-4 mt-16">
      <HeroTitle />
      <div className="w-full flex justify-center">
        <HeroSearch />
      </div>
  </div>
}

export default Home;