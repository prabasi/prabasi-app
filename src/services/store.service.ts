import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { Toast } from "../hooks/useToast";

export interface Store {
  toasts: Toast[];
  scans: { name: string; time: Date }[];
  manual: { name: string; time: Date }[];
}

const State: Store = {
  toasts: [],
  scans: [
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
    // { name: "kapil", time: new Date() },
    // { name: "kapil2", time: new Date() },
    // { name: "kapil3", time: new Date() },
    // { name: "kapil4", time: new Date() },
  ],
  manual: [],
};

const store = proxy(State);
if (window.location.hostname === "localhost") devtools(store);

export default store;
