import { ReactNode } from "react";
import { HelpCircle, Settings } from "react-feather";

interface SearchButtonProps {
    icon: ReactNode,
}

const SearchButton = ({ icon }: SearchButtonProps ) => {
    return <button className="ml-1 min-w-[32px] h-8 w-8 border flex border-gray-300 rounded-sm">
        { icon }
    </button>
}

const Search = () => {
    return <div className="w-full flex justify-between">
        <input 
            placeholder="Click or press 'S' to search, '?' for more options..."
            type="text"
            className="w-full h-8 px-2 py-1 border rounded-sm border-gray-300 outline-none"
        />
        <SearchButton icon={ <HelpCircle className="m-auto text-gray-500 h-5 w-5" /> } />
        <SearchButton icon={ <Settings className="m-auto text-gray-500 h-5 w-5" /> } />
    </div>
}

export default Search;