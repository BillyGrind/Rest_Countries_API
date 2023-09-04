import React, { useState } from "react";
import { Input, Stack,InputGroup,InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {

  const [inputText,setInputText]= useState();
  let inputHandler = (e) => {
    let lowerCase=e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  console.log(inputText);

  return (
    <Stack spacing={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search for a country..." onChange={inputHandler}/>
      </InputGroup>
    </Stack>
  );
}
