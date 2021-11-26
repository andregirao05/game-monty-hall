import { Text, Heading, HStack, Button, FlexProps } from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";

interface InputCardProps {
  description: string;
  valueOfState: number;
  handleValueOfState: (value: number) => void;
}

export function InputCard({
  description,
  valueOfState,
  handleValueOfState,
}: InputCardProps) {
  return (
    <CardWrapper bg="#ffffff">
      <Text fontSize="1xl">{description}</Text>
      <Heading fontSize="6xl">{valueOfState}</Heading>

      <HStack>
        <Button
          fontSize="4xl"
          w="44px"
          h="44px"
          onClick={() => handleValueOfState(valueOfState - 1)}
        >
          -
        </Button>

        <Button
          fontSize="4xl"
          w="44px"
          h="44px"
          onClick={() => handleValueOfState(valueOfState + 1)}
        >
          +
        </Button>
      </HStack>
    </CardWrapper>
  );
}
