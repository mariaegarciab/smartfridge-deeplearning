import {
  Flex,
  Text,
  Center,
  Link,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoDocumentText } from "react-icons/io5";
import { useDisclosure } from "@chakra-ui/react";
import GenerateModal from "./GenerateModal";
export default function FunctionMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex padding={"5px 20px"} direction={"column"}>
      <Flex bg="#F4EFFA" borderRadius={"20px"}>
        <Flex padding={" 10px"} gap={4} onClick={onOpen}>
          <Center
            bg="white"
            width={"50px"}
            height={"50px"}
            borderRadius={"25px"}
          >
            <IoDocumentText size="25px" color="#44337A" />
          </Center>
          <Text
            fontSize={"md"}
            fontWeight={700}
            marginLeft={"10px"}
            margin={"auto 0px"}
            color="#44337A"
          >
            Generate Recipe
          </Text>
          <GenerateModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>
    </Flex>
  );
}
