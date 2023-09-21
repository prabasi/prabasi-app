import React from "react";
import store from "../services/store.service";
import exportCSVFile from "../utils/saveAsCsvFile";
import useToast, { ToastModes } from "../hooks/useToast";

export default function Settings() {
  const { showToast } = useToast();
  function onExportReset() {
    exportCSVFile(store.scans as any, { name: "Name", time: "Time" }, "scans");
    store.scans = [];
    showToast("Exported & Reset Scans", ToastModes.SUCCESS);
  }
  function onExportManualReset() {
    exportCSVFile(
      store.manual as any,
      { name: "Name", time: "Time" },
      "manuals"
    );
    store.manual = [];
    showToast("Exported & Reset Manual", ToastModes.SUCCESS);
  }
  return (
    <div className="container grid gap-4 mx-auto w-full items-center justify-center py-4 overflow-auto mb-4">
      <ul className="flex flex-col bg-gray-300 p-4">
        <button
          onClick={onExportReset}
          className="border-gray-400 flex flex-row mb-2"
        >
          Export Scan & Reset Scan List
        </button>
      </ul>

      <ul className="flex flex-col bg-gray-300 p-4">
        <button
          onClick={onExportManualReset}
          className="border-gray-400 flex flex-row mb-2"
        >
          Export Manual & Reset Manual List
        </button>
      </ul>
    </div>
  );
}
