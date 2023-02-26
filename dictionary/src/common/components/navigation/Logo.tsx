import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.svg";

export interface LogoProps {
    height?: number,
    width?: number,
    className?: string,
    link?: boolean,
}

const Logo = ({ height, width, link }: LogoProps ) => {
    const elem = <Image 
        priority
        src={ logo }
        height={ height || 32 }
        width={ width || 32 }
        className="max-w-none my-auto"
        alt=""
    />;
    
    return link ? <Link href="/" className="flex">{ elem }</Link> : elem;
}

export default Logo;