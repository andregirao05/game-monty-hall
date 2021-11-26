import { Box } from "@chakra-ui/react";
import { useDoorInfo } from "../../../util/Hooks/DoorInfoProvider";

export function DoorHandle() {
  const { setIsOpen, selectionColor } = useDoorInfo();

  return (
    <Box
      w="24px"
      h="24px"
      borderRadius="50%"
      bg={selectionColor}
      pos="absolute"
      top="calc(50% - 12px)"
      left="15%"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(true);
      }}
    />
  );
}
