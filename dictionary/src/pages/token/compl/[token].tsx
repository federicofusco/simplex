import { useRouter } from "next/router";
import Title from "@/common/components/definitions/Title";
import Block from "@/common/components/definitions/Block";
import Search from "@/common/components/definitions/Search";
import { useContext, useEffect } from "react";
import NavigationContext from "@/common/lib/contexts/navigation";

const Word = () => {
    const router = useRouter ();
    let { token } = router.query;
    if ( !token || typeof token !== "string" ) token = "";

    // Capitalizes the word
    if ( token ) token = token.charAt ( 0 ).toUpperCase () + token.slice ( 1 );

    const { useSidebar } = useContext ( NavigationContext );
    useEffect ( () => useSidebar ({
        title: token,
        links: [
            { 
                text: "Definition",
                href: "#definition",
            },
            {
                text: "Synonyms",
                href: "#synonyms",
            },
            {
                text: "Examples",
                href: "#examples",
            }
        ],
        sources: []
    }), []);

    return <main className="m-0 absolute pt-3  px-4 sm:pr-4 pb-12 sm:pl-11 sm:right-0 top-[31px] w-full sm:w-[calc(100vw-208px)]">
        
        {/* Search bar */}
        <Search />

        {/* Title */}
        <Title title={ token } source="root?" />

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
}

export default Word;