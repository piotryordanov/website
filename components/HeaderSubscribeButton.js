import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Text, Flex } from "rebass";
import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

export default withHoverCursor(() => (
  <Flex alignItems="center">
    {withZoom(() => (
      <Link href="subscribe">
        <Text fontSize={15} fontWeight={700}>
          SUBSCRIBE
        </Text>
      </Link>
    ))()}
  </Flex>
));
