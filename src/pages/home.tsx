import React from "react";
import store from "../services/store.service";

export default function Home() {
  return (
    <div className="container flex mx-auto w-full items-center justify-center py-4 overflow-auto mb-4">
      <ul className="flex flex-col bg-gray-300 p-4">
        {store.scans.map((scan) => {
          return (
            <li className="border-gray-400 flex flex-row mb-2">
              <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">{scan.name}</div>
                </div>
                <div className="text-gray-600 text-xs">
                  {scan.time.toLocaleDateString()}
                </div>
              </div>
            </li>
          );
        })}
        {store.scans.length === 0 && (
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">
                  Please use top right button to scan enteries
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
