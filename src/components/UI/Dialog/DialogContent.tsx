'use client';
import { ReactNode, FC } from 'react';

type Props = { children: ReactNode };

const DialogContent: FC<Props> = ({children}) => {
    return (
        <div>{children}</div>
    )
};

export default DialogContent;