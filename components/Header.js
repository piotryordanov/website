import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass";

import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";
import HeaderSubscribeButton from "./HeaderSubscribeButton";

export default () => (
  <Navbar location="top">
    <Box pt={0.5} pb={0.5} m={"auto"} width={[1, 1 / 2, 1040]}>
      <Flex justifyContent="space-between">
        <HeaderLogo />
        <HeaderSubscribeButton />
      </Flex>
    </Box>
  </Navbar>
);
