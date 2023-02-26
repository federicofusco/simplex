import Link from "next/link";

export interface SidebarProps {
    title?: string | string[],
    links?: SidebarLink[],
    sources?: SidebarSource[],
    force_visible?: boolean,
}

export interface SidebarSource {
    href: string,
    text: string,
}

export interface SidebarLink {
    href: string,
    text: string,
}

const Sidebar = ({ title, links, sources, force_visible }: SidebarProps) => {
    return <nav className={`${!force_visible ? "hidden sm:block" : "block"} fixed h-[calc(100vh-31px)] z-[1000] w-52 left-0 top-[31px] bg-gray-100 pl-8 pt-8`}>
        
        {/* Title */}
        <h2 className="text-xl text-black font-bold">{ title }</h2>

        {/* Quick links */}
        { links && <>
                <h3 className="mt-8">Quick Links</h3>
                <ul className="mt-2 text-cyan-600">
                    { links.map ( link => <li key={ link.href }>
                            <Link href={ link.href }>
                                { link.text }
                            </Link>
                        </li> 
                    )}
                </ul>
            </>
        }

        {/* Sources */}
        { sources && <>
                <h3 className="mt-6">Sources</h3>
                <ul className="mt-2">
                    { sources.map ( source => <li key={ source.href }>
                            <Link className="text-cyan-600" href={ source.href }>
                                { source.text }
                            </Link>
                        </li> 
                    )}
                    { sources.length === 0 && <p className="text-sm text-gray-400">No sources available</p> }
                </ul>
            </>
        }
    </nav>
}

export default Sidebar;