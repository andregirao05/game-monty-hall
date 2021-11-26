import { FlexProps, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Door } from "./Door";

interface IDoorArea extends FlexProps {
  numberOfDoors: number;
  indexOfDoorWithGift: number;
}

export function DoorArea({
  numberOfDoors,
  indexOfDoorWithGift,
  ...rest
}: IDoorArea) {
  const [numberOfSelectedDoor, setNumberOfSelectedDoor] = useState(0);

  const renderDoors = () => {
    const doorsList = [];
    for (let i = 1; i <= numberOfDoors; i++) {
      const door = (
        <Door
          key={i}
          doorNumber={i}
          gift={i === indexOfDoorWithGift}
          numberOfSelectedDoor={numberOfSelectedDoor}
          setNumberOfSelectedDoor={setNumberOfSelectedDoor}
        />
      );
      doorsList.push(door);
    }
    return doorsList;
  };

  return (
    <Flex
      align="center"
      justify="center"
      flexWrap="wrap"
      gridGap="16px"
      {...rest}
    >
      {renderDoors()}
    </Flex>
  );
}
