import { Search } from "react-feather";

const HeaderSearchBar = () => {
    return <div className="flex justify-start">
        <Search className="text-gray-500 w-4 h-4 my-auto" />
        <input 
            placeholder="Explore" 
            type="search"
            className="text-xs placeholder:text-xs placeholder:text-gray-500 ml-1 outline-none" />
    </div>
}

export default HeaderSearchBar;