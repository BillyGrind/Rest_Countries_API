import React from "react";
import { CircularProgress} from "@chakra-ui/react";


export default function Loading() {
  return (
    <CircularProgress isIndeterminate color="green.300">
      Loading...
    </CircularProgress>
  );
}
