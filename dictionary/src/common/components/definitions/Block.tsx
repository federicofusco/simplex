import { ReactNode, useState } from "react";
import { Minus, Plus } from "react-feather";

export interface BlockProps {
    title: string,
    children: ReactNode,
}

const Block = ({ title, children }: BlockProps ) => {
    const [expanded, setExpanded] = useState<boolean> ( true );
    const toggleExpanded = () => setExpanded ( !expanded );

    return <section id={ title.toLowerCase () } className="mt-6 flex justify-start">    
        <button onClick={ toggleExpanded } className="h-7 w-6 flex">
            {expanded ? <Minus className="m-auto h-4 w-4" /> : <Plus className="m-auto h-4 w-4" />}
        </button>

        <article className="block w-full h-full">
            <button onClick={ toggleExpanded } className="h-7 flex">
                { expanded && <h2 className="text-lg my-auto font-bold">{ title }</h2> }
                { !expanded && <span className="my-auto ml-2 text-md text-gray-400">Expand { title.toLowerCase () }</span> }
            </button>

            { expanded && <hr className="my-2" /> } 
            { expanded && children }
        </article>
    </section>
}

export default Block;