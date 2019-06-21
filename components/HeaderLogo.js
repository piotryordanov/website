import React from "react";
import * as R from "ramda";
import Link from "next/link";
import { Image, Flex, Text } from "rebass";

import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

const Index = withHoverCursor(props => (
  <Link href="/">
    <Flex>
      <Image mr={2} width={"26px"} src={props.logo} borderRadius={8} />
      <Flex flexWrap="wrap">
        <Text fontSize={15} fontWeight={700} color="#333" mb={-0.5} width={1}>
          {props.text.author}
        </Text>
        <Text fontSize={12} fontWeight={700} color="#4c4c4c" width={1}>
          {props.text.subtitle}
        </Text>
      </Flex>
    </Flex>
  </Link>
));

export default withZoom(Index);
