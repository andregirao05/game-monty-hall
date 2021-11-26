import { Flex, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

export function RestartButton() {
  return (
    <Center>
      <Link href="/" passHref>
        <Button colorScheme="red">Reiniciar</Button>
      </Link>
    </Center>
  );
}
