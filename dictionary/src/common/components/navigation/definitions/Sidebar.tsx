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
    return <nav className="hidden sm:block fixed h-[calc(100vh-31px)] w-52 left-0 top-[31px] bg-gray-100 pl-8 pt-8">
        
        {/* Title */}
        <h2 className="text-xl text-black font-bold">{ word }</h2>

        {/* Quick links */}
        <h3 className="mt-8">Quick Links</h3>
        <ul className="mt-2 text-cyan-600">
            { links.map ( link => <li>
                    <Link href={ link.href }>
                        { link.text }
                    </Link>
                </li> 
            )}
        </ul>

        {/* Sources */}
        <h3 className="mt-6">Sources</h3>
        <ul className="mt-2">
            { sources.map ( source => <li>
                    <Link className="text-cyan-600" href={ source.href }>
                        { source.text }
                    </Link>
                </li> 
            )}
            { sources.length === 0 && <p className="text-sm text-gray-400">No sources available</p> }
        </ul>
    </nav>
}

export default Sidebar;