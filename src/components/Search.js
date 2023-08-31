import React from "react";
import { Input, Stack,InputGroup,InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
  return (
    <Stack spacing={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search for a country..." />
      </InputGroup>
    </Stack>
  );
}
