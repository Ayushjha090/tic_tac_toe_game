"use client";
import React from "react";

const Overlay = ({ open }: { open: boolean }) => {
  return <>{open ? <div className="w-screen h-screen absolute top-0 left-0 z-40 bg-slate-950/75"></div> : null}</>;
};

export default Overlay;
