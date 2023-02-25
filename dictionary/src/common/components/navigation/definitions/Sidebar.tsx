import Link from "next/link";

interface SidebarProps {
    word?: string | string[],
    links: SidebarLink[],
    sources: SidebarSource[],
}

interface SidebarSource {
    href: string,
    text: string,
}

interface SidebarLink {
    href: string,
    text: string,
}

const Sidebar = ({ word, links, sources }: SidebarProps) => {
    return <nav className="relative h-[calc(100vh-31px)] w-52 left-0 top-[31px] bg-gray-100 pl-8 pt-8">
        
        {/* Title */}
        <h2 className="text-xl text-black font-bold">{ word }</h2>

        {/* Quick links */}
        <ul className="mt-8 text-cyan-600">
            { links.map ( link => <li>
                    <Link href={ link.href }>
                        { link.text }
                    </Link>
                </li> 
            )}
        </ul>
    </nav>
}

export default Sidebar;