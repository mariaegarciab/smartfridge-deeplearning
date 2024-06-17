import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Spinner,
  Center,
} from "@chakra-ui/react";
import SelectItem from "./SelectItem";
import { useFridge } from "../swr/useFridge";
import { useState } from "react";
import RecipeReply from "./RecipeReply";

export default function GenerateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { data } = useFridge();
  const [selectData, setSelectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");

  const clearAllState = () => {
    setReply("");
    setIsLoading(false);
    setSelectData([]);
    onClose();
  };

  const handleGenerateRecipe = async () => {
    setIsLoading(true);
    const params = new URLSearchParams();
    selectData.forEach((item) => {
      params.append("items", item);
    });

    const url = `${
      process.env.NEXT_PUBLIC_SMART_FRIDGE_API_URL
    }/fridge/recipe?${params.toString()}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const reply = data.reply;
      setReply(reply);
      setIsLoading(false);
      setSelectData([]);
    } catch {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"90vw"} minHeight={"350px"}>
        {reply && <RecipeReply reply={reply} clearAllState={clearAllState} />}
        {!reply && isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {!reply && !isLoading && (
          <>
            <ModalHeader>Generate Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={"column"} gap="6">
                {data?.items.length ? (
                  data?.items.map((item: any, index: number) => (
                    <SelectItem
                      key={index}
                      data={item}
                      setSelectData={setSelectData}
                    />
                  ))
                ) : (
                  <Center>
                    <Spinner />
                  </Center>
                )}
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleGenerateRecipe}>
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
