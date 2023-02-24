import { useRouter } from "next/router";
import Sidebar from "@/common/components/navigation/sidebar/Sidebar";
import { ReactNode } from "react";
import { HelpCircle, Settings, Clipboard, Minus, Plus } from "react-feather";

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

const Word = () => {
    const router = useRouter ();
    let { word } = router.query;

    // Capitalizes the word
    if ( word ) {
        word = [...word]
        word[0] = word[0].toUpperCase();
        word = word.join ( "" );
    }

    return <>
        <Sidebar 
            word={ word }
            sources={[]}
        />

        <div className="m-0 absolute pt-3 pr-4 pb-12 pl-11 right-0 top-[31px] w-[calc(100vw-208px)]">
        
            {/* Search bar */}
            <Search />

            {/* Title */}
            <div className="mt-8 flex justify-start">
                <h1 className="text-xl font-bold">{ word }</h1>
                <Clipboard className="my-auto ml-2 w-4 h-4 text-gray-500" />
            </div>

            {/* Definition */}
            <div id="definition" className="flex justify-start mt-6">
                <Minus className="my-auto h-4 w-4 mr-2" />
                <h2 className="text-lg font-bold">Definition</h2>
            </div>
            <div className="w-[calc(100vw-292px)] ml-6 border-t border-gray-300 mt-2 pt-2">
                <p className="font-serif">definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition </p>
            </div>

            {/* Synonyms */}
            <div id="synonyms" className="flex justify-start mt-6">
                <Minus className="my-auto h-4 w-4 mr-2" />
                <h2 className="text-lg font-bold">Synonyms</h2>
            </div>
            <div className="w-[calc(100vw-292px)] ml-6 border-t border-gray-300 mt-2 pt-2">
                <ul className="list-disc list-inside">
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                </ul>
            </div>

            {/* Usage examples */}
            <div id="examples" className="flex justify-start mt-6">
                <Minus className="my-auto h-4 w-4 mr-2" />
                <h2 className="text-lg font-bold">Examples</h2>
            </div>
            <div className="w-[calc(100vw-292px)] ml-6 border-t border-gray-300 mt-2 pt-2">
                <ul className="list-inside list-disc">
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                    <li className="font-serif">synonym</li>
                </ul>
            </div>
        </div>
    </>
}

export default Word;