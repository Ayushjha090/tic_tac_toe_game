"use client";

import React, {useState} from "react";

import HeaderComponent from "./HeaderComponent";
import MarkPickerComponent from "./MarkPickerComponent";
import ActionButton from "../ActionButton";

const HomeComponent = () => {

  const [selectedMark, setSelectedMark] = useState<string>('x');

  return (
    <>
      <HeaderComponent />
      <main>
        <MarkPickerComponent selectedMark={selectedMark} setSelectedMark={setSelectedMark}/>
        <div className="flex flex-col w-3/4 lg:w-3/6 xl:w-2/6 m-auto my-5 p-5">
          <ActionButton
            title="New Game (vs Player)"
            path={`/vsPlayer/?selectedMark=${selectedMark}`}
            buttonName="vsPlayer"
          />
        </div>
      </main>
    </>
  );
};

export default HomeComponent;
