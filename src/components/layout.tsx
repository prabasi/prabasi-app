import React from "react";
import DesktopNav from "./desktop-nav";
import Header from "./header";
import MobileFooter from "./mobile-footer";

export default function Layout() {
  return (
    <>
      <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-[70px_minmax(60px,_1fr)] w-screen bg-gray-200">
        <DesktopNav />
        <Header />
        <MobileFooter />
      </div>
    </>
  );
}
