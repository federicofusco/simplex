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

        <main className="m-0 absolute pt-3 pr-4 pb-12 pl-11 right-0 top-[31px] w-[calc(100vw-208px)]">
        
            {/* Search bar */}
            <Search />

            {/* Title */}
            <h1 className="mt-8 flex justify-start text-xl font-bold">
                { word }
                <Clipboard className="my-auto ml-2 w-4 h-4 text-gray-500" />
            </h1>

            {/* Definition */}
            <section id="definition" className="mt-6 flex justify-start">    
                <div className="h-7 w-6 flex">
                    <Minus className="m-auto h-4 w-4" />
                </div>

                <article className="block w-full h-full">
                    <div className="h-7 flex">
                        <h2 className="text-lg my-auto font-bold">Definition</h2>
                    </div>

                    <hr className="my-2" />

                    <p className="font-serif">
                        definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                    </p>
                </article>
            </section>

            {/* Synonyms */}
            <section id="synonyms" className="mt-6 flex justify-start">    
                <div className="h-7 w-6 flex">
                    <Minus className="m-auto h-4 w-4" />
                </div>

                <article className="w-full h-full">
                    <div className="h-7 flex">
                        <h2 className="text-lg my-auto font-bold">Synonyms</h2>
                    </div>

                    <hr className="my-2" />

                    <p className="font-serif">
                        definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                    </p>
                </article>
            </section>

            {/* Usage examples */}
             <section id="examples" className="mt-6 flex justify-start">    
                <div className="h-7 w-6 flex">
                    <Minus className="m-auto h-4 w-4" />
                </div>

                <article className="w-full h-full">
                    <div className="h-7 flex">
                        <h2 className="text-lg my-auto font-bold">Examples</h2>
                    </div>

                    <hr className="my-2" />

                    <p className="font-serif">
                        definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                    </p>
                </article>
            </section>
        </main>
    </>
}

export default Word;