import React from "react";
import DesktopNav from "./desktop-nav";
import Header from "./header";
import MobileFooter from "./mobile-footer";

export default function Layout() {
  return (
    <>
      <div className="flex h-screen w-screen bg-gray-200">
        <DesktopNav />
        <Header />
        <MobileFooter />
      </div>
    </>
  );
}
