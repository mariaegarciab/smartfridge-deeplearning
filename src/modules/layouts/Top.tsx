import { Center, Text, Box, Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import PopOutReminds from "./PopOutReminds";
const TopBar = () => {
  return (
    <Flex
      w="100%"
      h="8vh"
      position="sticky"
      // background="#102f4d"
      padding={"20px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text fontSize="2xl" fontWeight={"700"}>
        SmartFridge
      </Text>
      <Center padding={"5px"}>
        <PopOutReminds />
      </Center>
    </Flex>
  );
};

const ScrollArea = ({ children }: PropsWithChildren) => (
  <Box flex="1" overflow="scroll">
    {children}
  </Box>
);
export default function Top({ children }: PropsWithChildren) {
  return (
    <Flex
      direction="column"
      maxH="100vh"
      maxW="100vw"
      // bgGradient="linear(to-r, gray.200, white)"
    >
      <TopBar />
      <ScrollArea>{children}</ScrollArea>
    </Flex>
  );
}
