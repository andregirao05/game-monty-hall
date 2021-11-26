import { DoorComponents } from "./DoorComponents";
import { DoorInfoProvider } from "../../../util/Hooks/DoorInfoProvider";

interface IDoorProps {
  doorNumber: number;
  gift: boolean;
  numberOfSelectedDoor: number;
  setNumberOfSelectedDoor: (value: number) => void;
}

export function Door({
  doorNumber,
  gift,
  numberOfSelectedDoor,
  setNumberOfSelectedDoor,
}: IDoorProps) {
  return (
    <DoorInfoProvider
      doorNumber={doorNumber}
      gift={gift}
      numberOfSelectedDoor={numberOfSelectedDoor}
      setNumberOfSelectedDoor={setNumberOfSelectedDoor}
    >
      <DoorComponents />
    </DoorInfoProvider>
  );
}
