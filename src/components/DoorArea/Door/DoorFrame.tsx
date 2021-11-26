import { Flex } from "@chakra-ui/react";
import { Gift } from "../../Gift";
import { DoorHandle } from "./DoorHandle";
import { DoorNumber } from "./DoorNumber";
import { useDoorInfo } from "../../../util/Hooks/DoorInfoProvider";

export function DoorFrame() {
  const { doorNumber, gift, isOpen, setIsOpen, selectionColor } = useDoorInfo();
  return (
    <Flex
      justify="center"
      align="flex-end"
      m="0 10px"
      bg={isOpen ? "#121212" : "#7a4016"}
      flex="1"
      border={`8px solid ${selectionColor}`}
      borderBottom="0"
      pos="relative"
    >
      {!isOpen ? (
        <>
          <DoorNumber />
          <DoorHandle />
        </>
      ) : (
        isOpen && gift && <Gift heigth={120} width={150} />
      )}
    </Flex>
  );
}
