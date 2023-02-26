import { ReactNode, useEffect, useCallback, useRef } from "react";
// import { HelpCircle, Settings } from "react-feather";

export interface SearchButtonProps {
    icon: ReactNode,
}

const SearchButton = ({ icon }: SearchButtonProps ) => {
    return <button className="ml-1 min-w-[32px] h-8 w-8 border flex border-gray-300 rounded-sm">
        { icon }
    </button>
}

const Search = () => { 
    const SEARCH_SHORTCUT = 's';
    const searchBarRef = useRef<HTMLInputElement> ( null );
    const focusSearchBar = () => {
        searchBarRef.current?.focus ();
        console.log(1);
    }

    const handleKeyPress = useCallback((event: any) => {
        if (event.key === SEARCH_SHORTCUT) focusSearchBar ();
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => { document.removeEventListener('keydown', handleKeyPress) };
    }, [handleKeyPress]);

    return <div className="w-full flex justify-between">
        <input 
            ref={ searchBarRef }
            placeholder="Click or press 'S' to search..."
            type="text"
            className="w-full h-8 px-2 py-1 border rounded-sm border-gray-300 outline-none"
        />

        {/* Temporarily remove these until they work */}
        {/* <SearchButton icon={ <HelpCircle className="m-auto text-gray-500 h-5 w-5" /> } />
        <SearchButton icon={ <Settings className="m-auto text-gray-500 h-5 w-5" /> } /> */}
    </div>
}

export default Search;