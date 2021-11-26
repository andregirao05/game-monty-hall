import { createContext, ReactNode, useContext, useState } from "react";

interface IDoorInfoContext {
  doorNumber: number;
  gift: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  doorIsSelected: boolean;
  selectionColor: string;
  numberOfSelectedDoor: number;
  setNumberOfSelectedDoor: (value: number) => void;
}

interface IDoorInfoProviderProps {
  children: ReactNode;
  doorNumber: number;
  gift: boolean;
  numberOfSelectedDoor: number;
  setNumberOfSelectedDoor: (value: number) => void;
}

const DoorInfoContext = createContext({} as IDoorInfoContext);

export function DoorInfoProvider({
  children,
  doorNumber,
  gift,
  numberOfSelectedDoor,
  setNumberOfSelectedDoor,
}: IDoorInfoProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const doorIsSelected = doorNumber == numberOfSelectedDoor;

  const selectionColor = doorIsSelected && !isOpen ? "#ffb914" : "#b83c0b";

  const values = {
    doorNumber,
    gift,
    isOpen,
    setIsOpen,
    doorIsSelected,
    selectionColor,
    numberOfSelectedDoor,
    setNumberOfSelectedDoor,
  };

  return (
    <DoorInfoContext.Provider value={values}>
      {children}
    </DoorInfoContext.Provider>
  );
}

export const useDoorInfo = () => useContext(DoorInfoContext);
