import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FilterRegion({ setSelectedRegion }) {
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filter by Region
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleRegionSelect("")}>All</MenuItem>
          <MenuItem onClick={() => handleRegionSelect("Africa")}>
            Africa
          </MenuItem>
          <MenuItem onClick={() => handleRegionSelect("America")}>
            America
          </MenuItem>
          <MenuItem onClick={() => handleRegionSelect("Asia")}>Asia</MenuItem>
          <MenuItem onClick={() => handleRegionSelect("Europe")}>
            Europe
          </MenuItem>
          <MenuItem onClick={() => handleRegionSelect("Oceania")}>
            Oceania
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
