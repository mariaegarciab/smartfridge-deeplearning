import { Flex, Text, Center, Spinner } from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import { useFridge } from "../swr/useFridge";

export default function FoodList() {
  const { data } = useFridge();

  return (
    <Flex padding={"5px 20px"} direction={"column"}>
      <Text fontSize={"xl"} fontWeight={500}>
        Fridge items
      </Text>
      {data?.items.length ? (
        <Flex marginTop="10px" direction={"column"} gap={4}>
          {data?.items.map((item: any, index: any) => (
            <FoodCard key={index} data={item} />
          ))}
        </Flex>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </Flex>
  );
}
