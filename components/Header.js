import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass";

import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";
import HeaderSubscribeButton from "./HeaderSubscribeButton";
import Headroom from "react-headroom";

export default props => (
  <Headroom>
    <Navbar>
      <Box py={0.5} px={2} m={"auto"} width={[1, 1, 1, 1040]}>
        <Flex justifyContent="space-between">
          <HeaderLogo {...props} />
        </Flex>
      </Box>
    </Navbar>
  </Headroom>
);
