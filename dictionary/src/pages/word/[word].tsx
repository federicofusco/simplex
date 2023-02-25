import { useRouter } from "next/router";
import Sidebar from "@/common/components/navigation/definitions/Sidebar";
import { Clipboard } from "react-feather";
import Block from "@/common/components/definitions/Block";
import Search from "@/common/components/definitions/Search";

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
            <Block title="Definition">
                <p className="font-serif">
                    definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                </p>
            </Block>

            {/* Synonyms */}
            <Block title="Synonyms">
                <p className="font-serif">
                    definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                </p>
            </Block>

            {/* Usage examples */}
            <Block title="Examples">
                <p className="font-serif">
                    definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition definition
                </p>
            </Block>
        </main>
    </>
}

export default Word;