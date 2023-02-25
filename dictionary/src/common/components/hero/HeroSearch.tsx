import { useRef, useCallback, useEffect } from "react";

const HeroSearch = () => {
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


    return <div className="border border-gray-300 rounded-sm flex justify-center mt-8 w-full max-w-md">
        <input 
            ref={ searchBarRef }
            placeholder="Click or press 'S' to search" 
            type="text" 
            className="w-full p-2 outline-none"
        />
        <button className="p-2 text-gray-400 border-l border-gray-300 hover:bg-gray-100">Search</button>
    </div>
}

export default HeroSearch;