"use client";

import React, { createContext, useState } from 'react'
import { ICONTEXT } from '@/shared/_modal/modal.type ';

export const ModalContext = createContext<ICONTEXT | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setModalVisibleState] = useState(false);
    return (
        <ModalContext.Provider value={{ isModalOpen, setModalVisibleState: () => setModalVisibleState(!isModalOpen)  } as ICONTEXT}>
            {children}
        </ModalContext.Provider>
    )
}