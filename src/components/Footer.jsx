import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import mk from "../assets/me.png"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      py={["16", "8"]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
        px={"4"}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"wider"}
            textAlign={["center", "left"]}
          >
            Welcome to XCrypto, your premier destination for seamless
            and secure cryptocurrency trading. Dive into the exciting world of
            digital assets with our user-friendly platform designed for both
            novice and experienced traders.
          </Text>
        </VStack>
        <VStack>
          <Avatar size={"25"} mt={["4", "0"]} src={mk}/>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
