import '@/styles/globals.css'
import { useState } from "react";
import type { AppProps } from 'next/app'
import NavigationContext from '@/common/lib/contexts/navigation' 
import Header from '@/common/components/header/Header'
import { SidebarProps } from '@/common/components/header/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  const [sidebar, setSidebar] = useState<SidebarProps | undefined> ( undefined );
  const useSidebar = (props?: SidebarProps) => {
    setSidebar ( props );
  }

  return <NavigationContext.Provider value={{ sidebar, useSidebar }}>
    <Header displayLogo />
    <Component {...pageProps} />
  </NavigationContext.Provider>
}
