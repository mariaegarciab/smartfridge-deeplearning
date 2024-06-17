import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function FoodCard({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [expirationDate, setExpirationDate] = useState(
    data?.expiration_date || ""
  );

  useEffect(() => {
    if (data.expiration_date) {
      setExpirationDate(data.expiration_date);
    }
  }, [data]);

  const handleUpdate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SMART_FRIDGE_API_URL}/fridge/item`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
          name: data.name,
          expiration_date: expirationDate,
        }),
      }
    );

    onClose();
  };

  return (
    <Flex
      borderRadius={"20px"}
      padding={"10px"}
      bg={"blackAlpha.200"}
      w="full"
      gap={4}
      align={"center"}
      justify={"start"}
    >
      <Flex
        width={"50px"}
        height={"50px"}
        alignItems={"center"}
        justify={"center"}
        bg={"white"}
        borderRadius={"10px"}
      >
        <Image src="foodItem.png" width={"40px"} height={"40px"}></Image>
      </Flex>
      <Flex
        align={"left"}
        justifyContent={"left"}
        fontSize={"xs"}
        fontWeight={500}
        direction={"column"}
      >
        <Text fontWeight={700} fontSize={"lg"}>
          {data?.name}
        </Text>
        <Text>
          In Fridge Since:
          <br /> {data?.in_fridge_since}
        </Text>
        <Text>
          Expiration Date:
          <br /> {data?.expiration_date}
        </Text>
      </Flex>
      <Spacer />
      <Button
        alignSelf={"end"}
        justifySelf={"end"}
        borderRadius={"10px"}
        height={"30px"}
        bg={"blue.800"}
        color={"white"}
        onClick={onOpen}
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"80vw"}>
          <ModalHeader>Edit Expiration Date</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Expiration Date: </Text>
            <Input
              type="date"
              value={expirationDate}
              onChange={(e) => {
                setExpirationDate(e.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button color="blue.800" mr={3} onClick={handleUpdate}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
