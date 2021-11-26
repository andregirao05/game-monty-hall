import { Button, Center, VStack, HStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardWrapper } from "./Cards/CardWrapper";
import Link from "next/link";
import { TextCard } from "./Cards/TextCard";
import { InputCard } from "./Cards/InputCard";

export function MainMenu() {
  const [amountOfDoors, setAmountOfDoors] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  useEffect(() => {
    if (doorWithGift > amountOfDoors) {
      setDoorWithGift(amountOfDoors);
    }
  }, [amountOfDoors, doorWithGift]);

  const handleAmountOfDoors = (value: number) => {
    const minValue = 3;
    const maxValue = 10;
    if (value >= minValue && value <= maxValue) {
      setAmountOfDoors(value);
    }
  };

  const handleDoorwithGift = (value: number) => {
    const minValue = 1;
    const maxValue = amountOfDoors;
    if (value >= minValue && value <= maxValue) {
      setDoorWithGift(value);
    }
  };

  return (
    <VStack>
      <HStack>
        <TextCard textContent="Desafio Monty Hall" bg="#800b25" color="#fff" />

        <InputCard
          description="Quantidade de portas"
          valueOfState={amountOfDoors}
          handleValueOfState={handleAmountOfDoors}
        />
      </HStack>

      <HStack>
        <InputCard
          description="Porta com presente"
          valueOfState={doorWithGift}
          handleValueOfState={handleDoorwithGift}
        />

        <Link href={`/game/${amountOfDoors}/${doorWithGift}`} passHref>
          <TextCard
            textContent="Iniciar"
            bg="#066649"
            color="#fff"
            pointer={true}
          />
        </Link>
      </HStack>
    </VStack>
  );
}
