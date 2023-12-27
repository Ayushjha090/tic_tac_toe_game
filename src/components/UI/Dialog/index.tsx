import { ReactNode, FC } from "react";
import Overlay from "../Overlay";

type Props = { children: ReactNode, open: boolean };

const Dialog: FC<Props> = ({ children, open }) => {
  return (
    <>
      {open ? 
        <div 
          className="w-10/12 md:w-8/12 lg:w-2/5 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-md bg-primary-color-light z-50 shadow-md shadow-primary-color-dark"
        >
          {children}
        </div> : null
      }
      <Overlay open={open}/>
    </>
  );
};

export default Dialog;
