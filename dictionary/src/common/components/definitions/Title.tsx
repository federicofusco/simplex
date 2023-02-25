import { Clipboard } from "react-feather";
import Link from "next/link";

interface TitleProps {
    title: string,
    source?: string,
}

const Title = ({ title, source }: TitleProps ) => {

    const copyToClipboard = ( text: string ) => navigator.clipboard.writeText ( text );

    return <div className="flex justify-between mt-8">
        <h1 className="flex justify-start text-xl font-bold">
            { title }

            <button onClick={() => copyToClipboard ( title ) } className="my-auto ml-2">
                <Clipboard className="text-gray-500 w-4 h-4" />
            </button>
        </h1>
    
        { source && <span>
            [<Link className="text-cyan-600 text-lg" href={ source }>source</Link>]
        </span> }
    </div>
}

export default Title;