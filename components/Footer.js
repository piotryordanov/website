import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Text, Box, Flex } from "rebass";

import withZoom from "./withZoom";
import withHoverCursor from "./withHoverCursor";

// ============================
// Components
const FooterText = withHoverCursor(styled(Text)`
  font-family: Montserrat, sans-serif;
  margin: 0px 5px;
`);

// ============================
// Links
const links = [
  { name: "Terms And Conditions", href: "terms-and-conditions" },
  { name: "Privacy Policy", href: "privacy" },
  { name: "Contact", href: "contact" },
  { name: "Newsletter", href: "newsletter" }
];
const items = links.map(curr => (
  <Link key={curr.name} href={curr.href}>
    <Flex>
      <FooterText>{curr.name}</FooterText>
      <div styles={{ color: "#aeaeae" }}>/</div>
    </Flex>
  </Link>
));

// ============================
// Render
export default withZoom(() => (
  <Box py={2} px={2} m={"auto"} width={[1, 1 / 2, 1, 1040]}>
    <Flex justifyContent="space-between">
      <FooterText>© 2019 Piotr Yordanov</FooterText>
      <Flex>{items}</Flex>
    </Flex>
  </Box>
));
