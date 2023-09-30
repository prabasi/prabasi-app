import { proxy, subscribe } from "valtio";
import { devtools } from "valtio/utils";
import { Toast } from "../hooks/useToast";
import localforage from "localforage";

export interface Data {
  name: string;
  time: number;
}
export interface ToastStore {
  toasts: Toast[];
}

export interface Store {
  scans: Data[];
  manual: Data[];
  session: string;
}

const State: Store = {
  scans: [],
  manual: [],
  session: "",
};

export const toastStore = proxy<ToastStore>({ toasts: [] });

const data = await localforage.getItem<string>("state");
const saveObj = data ? JSON.parse(data) : "";
const store = proxy({
  scans: (saveObj.scans as Data[]) || State.scans,
  manual: (saveObj.manual as Data[]) || State.manual,
  session: saveObj.session || State.session,
});
if (window.location.hostname === "localhost") devtools(store);

subscribe(store, () => {
  localforage.setItem("state", JSON.stringify(store));
});

export default store;
