import { SidebarProps } from "@/common/components/header/Sidebar";
import { createContext } from "react";

export interface NavigationContextProps {
    sidebar?: SidebarProps,
    useSidebar: (props?: SidebarProps ) => void,
}

const NavigationContext = createContext<NavigationContextProps> ({
    sidebar: undefined,
    useSidebar: () => {},
});

export default NavigationContext;