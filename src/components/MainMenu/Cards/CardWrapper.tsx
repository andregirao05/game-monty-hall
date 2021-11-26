import { Center, VStack, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardWrapperProps extends FlexProps {
  children: ReactNode;
}

export function CardWrapper({ children, ...rest }: CardWrapperProps) {
  return (
    <Center w="256px" h="256px" p="16px" {...rest}>
      <VStack>{children}</VStack>
    </Center>
  );
}
