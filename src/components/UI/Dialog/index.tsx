import { ReactNode, FC } from "react";
import Overlay from "../Overlay";

type Props = { children: ReactNode, open: boolean };

const Dialog: FC<Props> = ({ children, open }) => {
  return (
    <>
      {open ? 
        <div 
          className="w-5/12 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-md bg-white z-50"
        >
          {children}
        </div> : null
      }
      <Overlay open={open}/>
    </>
  );
};

export default Dialog;
