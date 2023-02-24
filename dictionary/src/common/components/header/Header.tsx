import { ReactNode } from "react";
import Logo from "@/common/components/navigation/Logo";
import HeaderSearchBar from "@/common/components/header/HeaderSearchBar";
import HeaderDropdown from "@/common/components/header/HeaderDropdown";

interface HeaderItemProps {
    children: ReactNode,
    className?: string,
    displayBorder?: boolean,
    left?: boolean,
    right?: boolean,
}

const HeaderItem = ({ children, displayBorder, left, right, className }: HeaderItemProps ) => {
    return <div className={`${className ? className : ""} ${displayBorder ? "border-x" : ""} ${left ? "border-l" : ""} ${right ? "border-r" : ""} border-gray-300 py-1 w-min px-2 h-[31px] flex`}>
        { children }
    </div>
}

interface HeaderProps {
    displayLogo?: boolean,
}

const Header = ({ displayLogo }: HeaderProps ) => { 
    return <div className="w-screen border-b border-gray-300 h-[31px] flex justify-between">

        {/* Displays the logo */}
        { displayLogo && <HeaderItem>
                <Logo 
                    className="my-auto"
                    link
                    height={ 18 }
                    width={ 18 } 
                />
            </HeaderItem> 
        }

        <div className="flex justify-end">
            {/* Displays quick links */}
            <HeaderItem left>
                <HeaderDropdown 
                    current="Dictionary"
                    options={[
                        ["Translator", "/translator"],
                        ["Iliad", "/iliad"],
                        ["Aeneide", "/aeneide"],
                        ["The Divine Commedy", "/comedy"],
                    ]}
                />
            </HeaderItem>

            {/* Displays the search bar */}
            <HeaderItem left className="hidden sm:flex">
                <HeaderSearchBar />
            </HeaderItem>
        </div>
    </div>
}

export default Header;