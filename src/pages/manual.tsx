import React from "react";
import store from "../services/store.service";
import useToast, { ToastModes } from "../hooks/useToast";
export default function Manual() {
  const [name, setName] = React.useState("");
  const { showToast } = useToast();
  const onAddClick = () => {
    if (name.trim() === "") return;
    if (store.manual.some((manual) => manual.name === name) === false) {
      store.manual.push({ name: name, time: new Date() });
      showToast(`${name} added to the list`, ToastModes.SUCCESS);
    } else {
      showToast(`Already ${name}`, ToastModes.ERROR);
    }
    setName("");
  };
  return (
    <div className="grid grid-flow-row grid-rows-[50px_1fr] gap-2 p-4">
      <div className="grid grid-flow-col grid-cols-[1fr_120px]">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={onAddClick}
          className="border-2 border-gray-300 rounded-md p-2 m-2 hover:bg-slate-100"
        >
          Add
        </button>
      </div>

      <div className="grid grid-flow-row grid-rows-[30px_1fr] gap-4">
        <span className="p-1">Total manual count is {store.manual.length}</span>
        <div className="container mx-auto w-full items-center pb-16 overflow-auto ">
          <ul className="grid grid-flow-row w-full bg-gray-300 p-4">
            {store.manual.map((manual) => {
              return (
                <li
                  key={manual.time.getTime()}
                  className="border-gray-400 flex flex-row mb-2"
                >
                  <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium">{manual.name}</div>
                    </div>
                    <div className="text-gray-600 text-xs">
                      {manual.time.toLocaleDateString()}
                    </div>
                  </div>
                </li>
              );
            })}
            {store.manual.length === 0 && (
              <li className="border-gray-400 flex flex-row mb-2">
                <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">Please add enteries</div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
