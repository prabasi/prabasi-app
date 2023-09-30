import React from "react";
import store from "../services/store.service";
import { subscribeKey } from "valtio/utils";

export default function SessionDialog() {
  const [show, setShow] = React.useState(false);
  const [session, setSession] = React.useState(store.session);
  React.useEffect(() => {
    if (session.length === 0) setShow(true);
  }, [session]);
  React.useEffect(() => {
    const unsub = subscribeKey(store, "session", (c) => {
      setSession(c);
      if (c === 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      unsub();
    };
  });
  return (
    <dialog id="my_modal_1" className={`modal ${show ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Welcome to Prabasi!</h3>
        <p className="py-4"></p>
        <form>
          <label className="label">
            <span className="label-text">Please provide the session name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </form>
        <div className="modal-action">
          <button
            className="btn btn-primary"
            onClick={() => {
              store.session = session;
              setShow(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
}
