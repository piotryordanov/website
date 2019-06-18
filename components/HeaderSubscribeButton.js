import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Text, Flex } from "rebass";

const SubscribeButton = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;

export default () => (
  <Flex alignItems="center">
    <Link href="subscribe">
      <SubscribeButton>Subscribe</SubscribeButton>
    </Link>
  </Flex>
);
