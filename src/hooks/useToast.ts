import { useSnapshot } from "valtio";
import { toastStore } from "../services/store.service";
import useAudio from "./useAudio";

export enum ToastModes {
  SUCCESS = "success",
  ERROR = "error",
}

export interface Toast {
  id: string;
  mode: ToastModes;
  message: string;
  duration: number;
}

interface UseToast {
  toasts: readonly Toast[];
  showToast: (message: string, mode: ToastModes, duration?: number) => void;
  hideToast: (id: string) => void;
}

export default function useToast(): UseToast {
  const { toasts } = useSnapshot(toastStore);
  const [toggleSuccessAudio] = useAudio("/prabasi-app/audio/success.mp3");
  const [failureSuccessAudio] = useAudio("/prabasi-app/audio/negative.mp3");

  function showToast(message: string, mode: ToastModes, duration = 3000) {
    const toast = { message, mode, duration, id: String(crypto.randomUUID()) };
    if (mode === ToastModes.ERROR) failureSuccessAudio();
    if (mode === ToastModes.SUCCESS) toggleSuccessAudio();
    toastStore.toasts.push(toast);
    if (toastStore.toasts.length > 3) {
      toastStore.toasts.shift();
    }
    setTimeout(() => hideToast(toast.id), duration);
  }

  function hideToast(id: string) {
    const index = toasts.findIndex((toast: Toast) => toast.id === id);
    toastStore.toasts.splice(index, 1);
  }

  return {
    toasts,
    showToast,
    hideToast,
  };
}
