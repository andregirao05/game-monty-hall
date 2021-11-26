import { Flex, Box } from "@chakra-ui/react";

interface IGiftProps {
  heigth: number,
  width: number,
}

export function Gift({ heigth, width } : IGiftProps) {
  
  return (
    <Flex 
      flexDir="column" 
      pos="relative" 
      align="center"
      w={width}
      h={heigth}
    >
      <Box w={width} h={0.25 * heigth} bg="#1e571f" />
      <Box w={0.9 * width} h={0.75 * heigth} bg="#163d17" />

      <Box 
        w={0.9 * width} 
        h={0.25 * heigth}
        bg="#bf1d30" 
        pos="absolute"
        top={`calc(50% - ${(0.25 * heigth) / 2}px)`}
      />

      <Box 
        w={0.25 * heigth} 
        h={heigth} 
        bg="#bf1d30" 
        pos="absolute"
        left={`calc(50% - ${(0.25 * heigth) / 2}px)`}
      />
    </Flex>
  )
}