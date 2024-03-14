import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.800"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY:"20px"
        }}

        transition={{
          duration:2,
          repeat:Infinity,
          repeatType:"reverse"
        }}
      >
        <Image
          w={"full"}
          height={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />

      </motion.div>
        <Text
          fontSize={"5xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.800"}
          mt={"-20"}
        >
          XCrypto
        </Text>
    </Box>
  );
};

export default Home;
