import FoodList from "@/modules/home/FoodList";
import FunctionMenu from "@/modules/home/FunctionMenu";
import Top from "@/modules/layouts/Top";
import { Box, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import FridgeState from "@/modules/home/FridgeState";
export default function Home() {
  return (
    <Box
    // bgGradient="linear(to-r, gray.200, rgb(205,205,128,0.1))"
    >
      <Top>
        <FridgeState />
        <FunctionMenu />
        <FoodList />
      </Top>
    </Box>
  );
}
