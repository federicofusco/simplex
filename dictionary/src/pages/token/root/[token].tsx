import { useRouter } from "next/router";
import Sidebar from "@/common/components/navigation/definitions/Sidebar";
import Title from "@/common/components/definitions/Title";
import Block from "@/common/components/definitions/Block";
import Search from "@/common/components/definitions/Search";

const Word = () => {
    const router = useRouter ();
    let { token } = router.query;

    if ( !token || typeof token !== "string" ) return null;

    // Capitalizes the word
    if ( token ) token = token.charAt ( 0 ).toUpperCase () + token.slice ( 1 );

    return <>
        <Sidebar 
            word={ token }
            sources={[]}
        />

        <main className="m-0 absolute pt-3 pr-4 pb-12 pl-11 right-0 top-[31px] w-[calc(100vw-208px)]">
        
            {/* Search bar */}
            <Search />

            {/* Title */}
            <Title title={ token } />

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