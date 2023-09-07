import React from "react";
import { CircularProgress, Box, Center } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Box  w='100%' h='100vh'>
        <Center>
          <CircularProgress isIndeterminate color="green.300">
            Loading...
          </CircularProgress>
        </Center>
      </Box>
    </>
  );
}
