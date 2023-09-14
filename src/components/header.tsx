import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex h-16 justify-between border-b-2 bg-white px-4">
        <ul className="flex items-center lg:hidden">
          <li className="h-6 w-6">
            <img
              className="mx-auto h-full w-full"
              src="/prabasi-app/logo192.png"
              alt="Prabasi on new England"
            />
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            <h1 className="pl-10 text-gray-700 lg:pl-0">
              Prabasi Pass Scanner
            </h1>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="pr-4">
            <Link to="/scan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4,4h6v6H4V4M20,4v6H14V4h6M14,15h2V13H14V11h2v2h2V11h2v2H18v2h2v3H18v2H16V18H13v2H11V16h3V15m2,0v3h2V15H16M4,20V14h6v6H4M6,6V8H8V6H6M16,6V8h2V6H16M6,16v2H8V16H6M4,11H6v2H4V11m5,0h4v4H11V13H9V11m2-5h2v4H11V6M2,2V6H0V2A2,2,0,0,1,2,0H6V2H2M22,0a2,2,0,0,1,2,2V6H22V2H18V0h4M2,18v4H6v2H2a2,2,0,0,1-2-2V18H2m20,4V18h2v4a2,2,0,0,1-2,2H18V22Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
