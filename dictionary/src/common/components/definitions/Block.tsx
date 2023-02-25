import { ReactNode } from "react";
import { Minus, Plus } from "react-feather";

interface BlockProps {
    title: string,
    children: ReactNode,
}

const Block = ({ title, children }: BlockProps ) => {
    return <section id={ title.toLowerCase () } className="mt-6 flex justify-start">    
        <div className="h-7 w-6 flex">
            <Minus className="m-auto h-4 w-4" />
        </div>

        <article className="block w-full h-full">
            <div className="h-7 flex">
                <h2 className="text-lg my-auto font-bold">{ title }</h2>
            </div>

            <hr className="my-2" />

            { children }
        </article>
    </section>
}

export default Block;