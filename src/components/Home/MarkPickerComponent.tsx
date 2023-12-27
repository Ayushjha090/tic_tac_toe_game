import { useState } from "react";

interface MarkContainerProps {
  mark: string;
  isSelected: boolean;
  onClick: (data: string) => void;
}

const MarkContainer = ({ mark, isSelected, onClick }: MarkContainerProps) => {
  return (
    <div
      className={`text-center p-2 w-1/2 rounded-xl cursor-pointer ${
        isSelected
          ? "bg-slate-300 text-background-color"
          : "bg-transparent text-slate-300 hover:bg-slate-300/5"
      }`}
      onClick={() => onClick(mark)}
    >
      <p className="text-5xl font-black uppercase">{mark}</p>
    </div>
  );
};

const MarkPickerComponent = (
  {
    selectedMark, 
    setSelectedMark
  }:{selectedMark:string, setSelectedMark:(selectedMark:string)=>void}) => {
  
  const handleSelectedMarkClick = (mark: string): void => {
    setSelectedMark(mark);
  };

  return (
    <div className="rounded-xl w-3/4 lg:w-3/6 xl:w-2/6 m-auto text-center p-6 box-border bg-primary-color-light shadow-md shadow-primary-color-dark">
      <h2 className="text-xl tracking-widest font-extrabold uppercase leading-8">
        Pick Player 1&apos;s Mark
      </h2>
      <div className="rounded-xl flex flex-row my-5 p-3 bg-background-color">
        <MarkContainer
          mark="x"
          isSelected={selectedMark.toLowerCase() === "x"}
          onClick={handleSelectedMarkClick}
        />
        <MarkContainer
          mark="o"
          isSelected={selectedMark.toLowerCase() === "o"}
          onClick={handleSelectedMarkClick}
        />
      </div>
      <h2 className="text-base text-slate-400 tracking-wide font-extrabold uppercase">
        Remember : X goes first
      </h2>
    </div>
  );
};

export default MarkPickerComponent;
