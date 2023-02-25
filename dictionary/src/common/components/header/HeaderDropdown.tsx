import { useState } from "react"
import Link from "next/link";

interface HeaderDropdownProps {
    current: string,
    options: [string, string][],
}

const HeaderDropdown = ({ current, options }: HeaderDropdownProps ) => {
    const [visible, setVisibility] = useState<boolean> ( false );
    const toggle = () => setVisibility ( !visible );
    
    return <div className="relative">
        <div onClick={ toggle } className="w-full h-full flex cursor-pointer my-auto mx-2">
            <p className="text-xs text-gray-500 my-auto w-min">{ current }</p>
        </div>
        <ul className={`${visible ? "fixed": "hidden"} bg-white z-[1000] border-b border-x border-gray-300 top-[31px]`}>
            { options.map ( option => <li key={ option[0] } className="px-3 py-1 hover:bg-gray-100 flex">
                    <Link href={option[1]} className="text-xs my-auto text-gray-500 block">{ option[0] }</Link>
                </li>
            ) }
        </ul>
    </div>
}

export default HeaderDropdown;