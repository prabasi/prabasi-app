import { useSnapshot } from "valtio";
import store from "../services/store.service";

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
  const { toasts } = useSnapshot(store);

  function showToast(message: string, mode: ToastModes, duration = 3000) {
    const toast = { message, mode, duration, id: String(crypto.randomUUID()) };
    store.toasts.push(toast);
    if (store.toasts.length > 3) {
      store.toasts.shift();
    }
    setTimeout(() => hideToast(toast.id), duration);
  }

  function hideToast(id: string) {
    const index = toasts.findIndex((toast: Toast) => toast.id === id);
    store.toasts.splice(index, 1);
  }

  return {
    toasts,
    showToast,
    hideToast,
  };
}
