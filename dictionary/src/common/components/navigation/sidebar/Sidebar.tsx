interface SidebarProps {
    word?: string | string[],
    sources: [string, string][],
}

const Sidebar = ({ word, sources }: SidebarProps) => {
    return <div className=" h-full w-52 fixed left-0 top-[31px] bg-gray-100 pl-8 pt-8">
        
        {/* Title */}
        <h1 className="text-xl text-black font-bold">{ word }</h1>
    </div>
}

export default Sidebar;