import {
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

interface Props {
  reply: string;
  clearAllState: () => void;
}

export default function RecipeReply({ reply, clearAllState }: Props) {
  return (
    <>
      <ModalHeader>Generate Recipe</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{reply}</ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={clearAllState}>
          Close
        </Button>
      </ModalFooter>
    </>
  );
}
