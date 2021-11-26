import { Box, Flex, Text, FlexProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Gift } from "../../Gift";
import { DoorFrame } from "./DoorFrame";
import { useDoorInfo } from "../../../util/Hooks/DoorInfoProvider";

export function DoorComponents(props: FlexProps) {
  const { isOpen, doorNumber, setNumberOfSelectedDoor } = useDoorInfo();

  const toggleDoorSelection = (e) => {
    if (!isOpen) {
      setNumberOfSelectedDoor(doorNumber);
    }
  };

  return (
    <Flex
      flexDir="column"
      pos="relative"
      minH={300}
      h={300}
      minW={200}
      w={200}
      {...props}
      onClick={toggleDoorSelection}
    >
      <DoorFrame />
      <Flex w="100%" h="5%" bg="#cccccc" />
    </Flex>
  );
}
