import React from "react";
import { useNavigate } from "react-router-dom";
import store from "../services/store.service";
import exportCSVFile from "../utils/saveAsCsvFile";

export default function Settings() {
  const navigate = useNavigate();

  function onExportReset() {
    exportCSVFile(store.scans as any, { name: "Name", time: "Time" }, "scans");
    store.scans = [];
    navigate("/prabasi-app/");
  }
  return (
    <div className="container flex mx-auto w-full items-center justify-center py-4 overflow-auto mb-4">
      <ul className="flex flex-col bg-gray-300 p-4">
        <button
          onClick={onExportReset}
          className="border-gray-400 flex flex-row mb-2"
        >
          Export & Reset App
        </button>
      </ul>
    </div>
  );
}
