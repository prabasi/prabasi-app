import React from "react";
import store from "../services/store.service";
import exportCSVFile from "../utils/saveAsCsvFile";
import useToast, { ToastModes } from "../hooks/useToast";

export default function Settings() {
  const { showToast } = useToast();
  function onExportReset() {
    exportCSVFile(
      store.scans as any,
      { name: "Name", time: "Time" },
      `${store.session}-scans`
    );
    store.scans = [];
    showToast("Exported & Reset Scans", ToastModes.SUCCESS);
  }
  function onExportManualReset() {
    exportCSVFile(
      store.manual as any,
      { name: "Name", time: "Time" },
      `${store.session}-manuals`
    );
    store.manual = [];
    showToast("Exported & Reset Manual", ToastModes.SUCCESS);
  }
  function onClearSession() {
    store.session = "";
    showToast("Session Cleared", ToastModes.SUCCESS);
  }
  return (
    <div className="container grid gap-4 p-4 justify-center">
      <button onClick={onExportReset} className="btn btn-primary">
        Export Scan & Reset Scan List
      </button>

      <button onClick={onExportManualReset} className="btn btn-primary">
        Export Manual & Reset Manual List
      </button>

      <button onClick={onClearSession} className="btn btn-warning">
        Start a New Sesion
      </button>
    </div>
  );
}
