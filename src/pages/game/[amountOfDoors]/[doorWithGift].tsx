import { DoorArea } from "../../../components/DoorArea";
import { RestartButton } from "../../../components/RestartButton";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function Game() {
  const [numberOfDoors, setNumberOfDoors] = useState(0);
  const [indexOfDoorWithGift, setIndexOfDoorWithGift] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setNumberOfDoors(Number(router.query.amountOfDoors));
    setIndexOfDoorWithGift(Number(router.query.doorWithGift));
  }, [router, numberOfDoors, indexOfDoorWithGift]);

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      bg="#161821"
      minH="100vh"
      gridGap="20px"
      p="20px"
    >
      <DoorArea
        numberOfDoors={numberOfDoors}
        indexOfDoorWithGift={indexOfDoorWithGift}
      />
      <RestartButton />
    </Flex>
  );
}
