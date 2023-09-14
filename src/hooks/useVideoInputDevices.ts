import { useEffect, useState } from "react";

import useToast, { ToastModes } from "./useToast";

interface Device {
  deviceId: string | null;
  label?: string;
  mode?: string;
}

export default function useVideoInputDevices(): {
  deviceMode: string;
  deviceId: string | undefined;
  nextDevice: () => void;
  devices: Device[];
} {
  const [devices, setDevices] = useState<Device[]>([]);
  const [activeDevice, setActiveDevice] = useState<Device>({
    deviceId: null,
    mode: "environment",
  });
  const { showToast } = useToast();

  function nextDevice() {
    const index = devices.findIndex(
      (device) => device.deviceId === activeDevice.deviceId
    );
    const device =
      index > -1 ? devices[(index + 1) % devices.length] : undefined;
    if (device) {
      setActiveDevice({
        deviceId: device.deviceId,
        mode: activeDevice.mode === "user" ? "environment" : "user",
      });
      showToast(
        `Camera switched: Now using ${device.label} to scan attendee QR codes`,
        ToastModes.SUCCESS
      );
    }
  }

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((data) => {
      const results = data.filter((device) => device.kind === "videoinput");
      setDevices(results);
      if (
        (!activeDevice.deviceId && results.length) ||
        !results.some((device) => device.deviceId === activeDevice.deviceId)
      ) {
        setActiveDevice({ deviceId: results[0].deviceId, mode: "environment" });
      }
    });
  }, []);

  return {
    deviceMode: activeDevice.mode ?? "environment",
    deviceId: activeDevice.deviceId ?? undefined,
    nextDevice,
    devices,
  };
}
