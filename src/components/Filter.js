import React, { useState, useEffect } from "react";
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Filter(props) {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    props.onSearch(inputText);
  }, [inputText, props]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Stack spacing={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for a country..."
          value={inputText}
          onChange={inputHandler}
        />
      </InputGroup>
    </Stack>
  );
}