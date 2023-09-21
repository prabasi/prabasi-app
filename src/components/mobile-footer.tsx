import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileFooter() {
  return (
    <nav
      className="fixed bottom-0 h-16 flex w-full overflow-x-auto border bg-white
		lg:hidden"
    >
      <NavLink
        to="/"
        className={({ isActive }) => ` ${
          isActive ? "text-orange-500 bg-gray-50" : ""
        } whitespace-no-wrap flex flex-grow flex-col items-center
        justify-center overflow-hidden text-sm transition-colors
        duration-100 ease-in-out  focus:text-orange-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path
            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
					2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          ></path>
        </svg>

        <span className="hidden text-sm capitalize">List</span>
      </NavLink>

      <NavLink
        to="/manual"
        className={({ isActive }) => ` ${
          isActive ? "text-orange-500 bg-gray-50" : ""
        } whitespace-no-wrap flex flex-grow flex-col items-center
        justify-center overflow-hidden text-sm transition-colors
        duration-100 ease-in-out  focus:text-orange-500`}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
            fill="#0F0F0F"
          />
          <path
            d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
            fill="#0F0F0F"
          />
          <path
            d="M8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21Z"
            fill="#0F0F0F"
          />
          <path
            d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
            fill="#0F0F0F"
          />
          <path
            d="M11 9C11 8.44771 11.4477 8 12 8C12.5523 8 13 8.44771 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9C8.44771 13 8 12.5523 8 12C8 11.4477 8.44771 11 9 11H11V9Z"
            fill="#0F0F0F"
          />
        </svg>

        <span className="hidden text-sm capitalize">Manual</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => ` ${
          isActive ? "text-orange-500 bg-gray-50" : ""
        } whitespace-no-wrap flex flex-grow flex-col items-center
        justify-center overflow-hidden text-sm transition-colors
        duration-100 ease-in-out  focus:text-orange-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83
					2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65
					0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0
					0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2
					2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
					0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0
					4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2
					0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0
					1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1
					1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0
					0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0
					1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0
					0-1.51 1z"
          ></path>
        </svg>

        <span className="hidden text-sm capitalize">Settings</span>
      </NavLink>
    </nav>
  );
}
