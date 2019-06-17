import React from "react";
import { Flex, Box } from "rebass";

export default (props) => (
  <Flex>
    <Box m={20}>{props.title}</Box>
  </Flex>
);
