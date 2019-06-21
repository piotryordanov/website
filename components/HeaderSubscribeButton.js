import React from "react";
import { Link } from "rebass";
import styled from "styled-components";
import { Text, Flex } from "rebass";
import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

export default () => (
  <Flex alignItems="center">
    {withHoverCursor(
      withZoom(() => (
        <Link color="black" css={{ textDecoration: "none" }} href="/about">
          <Text fontSize="1" fontWeight={700}>
            ABOUT
          </Text>
        </Link>
      ))
    )()}
  </Flex>
);
