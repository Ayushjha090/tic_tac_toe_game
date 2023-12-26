'use client';
import {ReactNode, FC} from 'react';

import CloseIcon from '@mui/icons-material/Close';

type Props = {children: ReactNode}

export const DialogTitle = ({title, onClose}:{title: string, onClose?:()=>void}) => {
    return (
        <div className='text-2xl font-extrabold flex flex-row justify-between text-black'>
            <div>
                {title}
            </div>
            <div>
                <CloseIcon className='cursor-pointer' onClick={onClose}/>
            </div>
        </div>
    )
};

export const DialogDescription = ({description}:{description: string}) => {
    return (
        <div className='text-slate-700'>
            {description}
        </div>
    )
}

export const DialogHeader: FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
};