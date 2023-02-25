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
    disablePadding?: boolean,
}

const HeaderItem = ({ children, displayBorder, left, right, className, disablePadding }: HeaderItemProps ) => {
    return <div className={`${className ? className : ""} ${displayBorder ? "border-x" : ""} ${left ? "border-l" : ""} ${right ? "border-r" : ""} border-gray-300 ${disablePadding ? "" : "py-1 px-2"} w-min h-[31px] flex`}>
        { children }
    </div>
}

interface HeaderProps {
    displayLogo?: boolean,
}

const Header = ({ displayLogo }: HeaderProps ) => { 
    return <div className="fixed top-0 z-[1000] bg-white w-screen border-b border-gray-300 h-[31px] flex justify-between">

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
            <HeaderItem left disablePadding>
                <HeaderDropdown 
                    current="Dictionary"
                    options={[
                        ["Translator", "/translator"],
                        ["Iliad", "/iliad"],
                        ["Aeneide", "/aeneide"],
                        ["Oddesey", "/comedy"],
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