import { Text } from "@chakra-ui/react";
import { useDoorInfo } from "../../../util/Hooks/DoorInfoProvider";

export function DoorNumber() {
  const { doorNumber } = useDoorInfo();

  return (
    <Text
      userSelect={"none"}
      color="#ffffff"
      fontSize="6xl"
      pos="absolute"
      top="0"
    >
      {doorNumber}
    </Text>
  );
}
