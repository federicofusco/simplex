import { Menu } from "react-feather";
import { useContext } from "react";
import NavigationContext from "@/common/lib/contexts/navigation";

const SidebarButton = () => {
    const { useSidebar, sidebar } = useContext ( NavigationContext );
    const toggleSidebar = (): void => useSidebar ({ ...sidebar, force_visible: sidebar?.force_visible === undefined ? true : !sidebar?.force_visible });

    return <button onClick={ toggleSidebar } className="outline-none flex justify-center">
        <Menu className=" text-gray-500 w-4 h-4 my-auto" />
    </button> 
}

export default SidebarButton;