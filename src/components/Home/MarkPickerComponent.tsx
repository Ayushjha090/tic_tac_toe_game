import { useState } from "react";

const MarkPickerComponent = () => {
  const [selectedMark, setSelectedMark] = useState<string>("x");

  const handleSelectedMarkClick = (mark: string): void => {
    setSelectedMark(mark);
  };

  return (
    <div className="rounded-xl w-3/4 lg:w-3/6 xl:w-2/6 m-auto text-center p-5 box-border bg-sky-950 shadow-md shadow-cyan-950">
      <h2 className="text-base tracking-wide font-medium uppercase">
        Pick Player 1&apos;s Mark
      </h2>
      <div className="rounded-xl flex flex-row my-5 p-2 bg-slate-900">
        <div
          className={`${
            selectedMark.toLowerCase() === "x"
              ? "bg-slate-300 text-slate-900"
              : "bg-transparent text-slate-300 hover:bg-slate-800"
          } text-center p-1 w-1/2 rounded-xl cursor-pointer`}
          onClick={() => handleSelectedMarkClick("x")}
        >
          <p className="text-5xl font-black">X</p>
        </div>
        <div
          className={`${
            selectedMark.toLowerCase() === "o"
              ? "bg-slate-300 text-slate-900"
              : "bg-transparent text-slate-300 hover:bg-slate-800"
          } text-center p-1 w-1/2 rounded-xl cursor-pointer`}
          onClick={() => handleSelectedMarkClick("o")}
        >
          <p className="text-5xl font-black">O</p>
        </div>
      </div>
      <h2 className="text-sm text-slate-400 font-extrabold uppercase">
        Remember : X goes first
      </h2>
    </div>
  );
};

export default MarkPickerComponent;
