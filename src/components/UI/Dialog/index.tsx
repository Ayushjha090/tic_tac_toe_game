import { ReactNode, FC } from "react";

type Props = { children: ReactNode };

const Dialog: FC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Dialog;
