import React from "react";
import styled from "styled-components";
import { Text, Flex } from "rebass";
import Link from "./Link";
import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

export default () => (
  <Flex alignItems="center">
    {withHoverCursor(
      withZoom(() => (
        <Link href="/about">
          <Text fontSize="1" fontWeight={700}>
            ABOUT
          </Text>
        </Link>
      ))
    )()}
  </Flex>
);
