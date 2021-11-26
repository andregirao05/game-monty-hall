import { Heading, FlexProps } from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";

interface TextCardProps extends FlexProps {
  textContent: string;
  pointer?: boolean;
}

export function TextCard({ textContent, pointer, ...rest }: TextCardProps) {
  let additionalStyles = { ...rest };
  if (pointer) {
    additionalStyles = {
      cursor: "pointer",
      ...rest,
    };
  }

  return (
    <CardWrapper {...additionalStyles}>
      <Heading as="h1">{textContent}</Heading>
    </CardWrapper>
  );
}
