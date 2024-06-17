import { Flex, Text, Image, Center } from "@chakra-ui/react";
import { useFridge } from "../swr/useFridge";

export default function FridgeState() {
  const { data } = useFridge();
  return (
    <Flex padding={"5px 20px"} direction={"column"}>
      {/* <Text fontSize={"xl"} fontWeight={500}>
        Fridge State
      </Text> */}
      <Flex borderRadius={"20px"} bg="#EBF8FF">
        <Flex width={"50%"} alignItems={"center"} justify={"center"}>
          <Image src="fridge.png" height={"165px"}></Image>
        </Flex>
        <Flex width={"50%"} direction={"column"} padding={"10px 0px"}>
          <Text fontSize={"md"} fontWeight={600} color={"blue.700"}>
            Temperature:{" "}
          </Text>
          <Flex color={"blue.700"}>
            <Text fontSize={"6xl"} fontWeight={500}>
              {data?.temperature}
            </Text>
            <Text fontSize={"2xl"} fontWeight={500}>
              °C
            </Text>
          </Flex>
          <Text fontSize={"md"} fontWeight={600} color={"blue.700"}>
            Humidity: {data?.humidity}%
          </Text>
          <Text
            fontSize={"md"}
            fontWeight={500}
            color={"white"}
            bg="blue.500"
            width={"fit-content"}
            padding={"0px 10px"}
            borderRadius={"15px"}
          >
            Status: {data?.status}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
