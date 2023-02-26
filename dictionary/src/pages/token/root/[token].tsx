import { useRouter } from "next/router";
import Meta from "@/common/components/navigation/Meta";
import Title from "@/common/components/definitions/Title";
import Block from "@/common/components/definitions/Block";
import Search from "@/common/components/definitions/Search";
import NavigationContext from "@/common/lib/contexts/navigation";
import { useContext, useEffect } from "react";

const Word = () => {
    const router = useRouter ();
    let { token } = router.query;
    if ( !token || typeof token !== "string" ) token = "";
    token = token.charAt ( 0 ).toUpperCase () + token.slice ( 1 );

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
        sources: [],
    }), []);

    const definition = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return <>
        <Meta title={ token } description={ definition } />
        <main className="m-0 absolute pt-3 px-4 sm:pr-4 pb-12 sm:pl-11 w-full sm:right-0 top-[31px] sm:w-[calc(100vw-208px)]">
            
            {/* Search bar */}
            <Search />

            {/* Title */}
            <Title title={ token } />

            {/* Definition */}
            <Block title="Definition">
                <p className="font-serif">
                    { definition }
                </p>
            </Block>

            {/* Synonyms */}
            <Block title="Synonyms">
                <p className="font-serif">
                    { definition }
                </p>
            </Block>

            {/* Usage examples */}
            <Block title="Examples">
                <p className="font-serif">
                    { definition }
                </p>
            </Block>
        </main>
    </>
}

export default Word;