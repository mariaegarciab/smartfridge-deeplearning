import {
  Center,
  Flex,
  Image,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
export default function AddExpiredDate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center margin="auto" height="80px" onClick={onOpen}>
      <Flex direction={"column"}>
        <Image src="Date1.png" width={"80%"} margin={"auto"} />
        <Text fontSize={"sm"} fontWeight={500} textAlign={"center"}>
          Add Expired Date
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="80%" justifyContent={"center"} alignItems={"center"}>
          <ModalHeader>Add Expired date</ModalHeader>
          <ModalBody>
            <Flex padding={0} margin={"5px"}>
              <Center marginRight={"10px"}>Banana</Center>
              <Input placeholder="Select Date " type="date"></Input>
            </Flex>

            <Center margin={"10px"}>
              <Button>Confirm</Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
