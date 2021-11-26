import { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface IFullPageProps extends FlexProps {
  children: ReactNode;
}

export function FullPage({ children, ...rest }: IFullPageProps) {
  return (
    <Flex w="100vw" h="auto" {...rest}>
      {children}
    </Flex>
  );
}
