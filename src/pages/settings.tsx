import React from "react";
import store from "../services/store.service";
import exportCSVFile from "../utils/saveAsCsvFile";
import useToast, { ToastModes } from "../hooks/useToast";

export default function Settings() {
  const { showToast } = useToast();
  function onExportScan() {
    store.scans = [];
    showToast("Reset Scans Completed", ToastModes.SUCCESS);
  }
  function onScanReset() {
    exportCSVFile(
      store.scans as any,
      { name: "Name", time: "Time" },
      `${store.session}-scans`
    );
    showToast("Exported Scans Completed", ToastModes.SUCCESS);
  }
  function onExportManual() {
    exportCSVFile(
      store.manual as any,
      { name: "Name", time: "Time" },
      `${store.session}-manuals`
    );
    showToast("Exported Manual List", ToastModes.SUCCESS);
  }
  function onManualReset() {
    store.manual = [];
    showToast("Reset Manual List", ToastModes.SUCCESS);
  }
  function onClearSession() {
    store.session = "";
    showToast("Session Cleared", ToastModes.SUCCESS);
  }
  return (
    <div className="container grid gap-4 p-4 justify-center">
      <button onClick={onExportScan} className="btn btn-primary">
        Export Scan List
      </button>
      <button onClick={onScanReset} className="btn btn-error">
        Reset Scan List
      </button>

      <button onClick={onExportManual} className="btn btn-primary">
        Export Manual List
      </button>
      <button onClick={onManualReset} className="btn btn-error">
        Reset Manual List
      </button>

      <button onClick={onClearSession} className="btn btn-warning">
        Start a New Sesion
      </button>
    </div>
  );
}
