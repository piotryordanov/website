import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass";
import Link from "./Link";
console.log(Link);

import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

// ============================
// Components
const FooterText = withHoverCursor(props => (
  <Text fontSize={[0, 1]} mx={"5px"}>
    {props.children}
  </Text>
));

// ============================
// Links
const links = [
  { name: "Terms And Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy" }
];
{
  /* { name: "Contact", href: "contact" }, */
}
{
  /* { name: "Newsletter", href: "newsletter" } */
}
const items = links.map(curr => (
  <Link key={curr.name} href={curr.href}>
    <Flex>
      <FooterText>{curr.name}</FooterText>
      <Box fontSize={[0, 1]} color="#aeaeae">
        /
      </Box>
    </Flex>
  </Link>
));

// ============================
// Render
export default withZoom(() => {
  return (
    <Box py={2} px={2} m={"auto"} width={[1, 1, 1, 1040]}>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box width={[1, 3 / 4]} order={1}>
          <Flex justifyContent="flex-end">{items}</Flex>
        </Box>
        <Box width={[1, "150px"]} order={0}>
          <FooterText>© 2019 Piotr Yordanov</FooterText>
        </Box>
      </Flex>
    </Box>
  );
});
