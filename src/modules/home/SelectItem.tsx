import { Button, Checkbox, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";

interface Props {
  data: any;
  setSelectData: Dispatch<SetStateAction<any>>;
}

export default function SelectItem({ data, setSelectData }: Props) {
  const handleCheck = () => {
    setSelectData((prev: any) => [...prev, data.name]);
  };
  return (
    <Flex w="100%">
      <Checkbox size="lg" colorScheme="blue" onChange={handleCheck}>
        <Flex
          borderRadius={"10px"}
          padding={"15px"}
          bg={"blackAlpha.200"}
          gap={4}
          width={"270px"}
          align={"center"}
          justify={"start"}
        >
          <Text fontWeight={700} fontSize={"lg"}>
            {data?.name}
          </Text>
          <Spacer />
          <Text fontWeight={500} fontSize={"sm"} color={"gray.400"}>
            {data?.expiration_date ? (
              <Text>
                Expires in {moment(data?.expiration_date).fromNow(true)}
              </Text>
            ) : (
              <></>
            )}
          </Text>
        </Flex>
      </Checkbox>
    </Flex>
  );
}
