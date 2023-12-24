import React from "react";

import HeaderComponent from "./HeaderComponent";
import MarkPickerComponent from "./MarkPickerComponent";
import ActionButton from "../ActionButton";

const HomeComponent = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <MarkPickerComponent />
        <div className="flex flex-col w-3/4 lg:w-3/6 xl:w-2/6 m-auto my-5 p-5">
          <ActionButton
            title="New Game (vs Player)"
            path="/vsPlayer/"
            buttonName="vsPlayer"
          />
        </div>
      </main>
    </>
  );
};

export default HomeComponent;
