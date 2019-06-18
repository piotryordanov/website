import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Text, Box, Flex } from "rebass";

import withZoom from "./withZoom";
import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";
import HeaderSubscribeButton from "./HeaderSubscribeButton";

// ============================
// Components
const FooterText = styled(Text)`
  font-family: Montserrat, sans-serif;
  margin: 0px 5px;
`;

const FooterTextClickable = styled(FooterText)`
  :hover {
    cursor: pointer;
  }
`;

const Seperator = styled.div`
  color: #aeaeae;
`;

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
      <FooterTextClickable>{curr.name}</FooterTextClickable>
      <Seperator>/</Seperator>
    </Flex>
  </Link>
));

// ============================
// Render
export default withZoom(() => (
  <Box py={0.5} px={2} m={"auto"} width={[1, 1 / 2, 1, 1040]}>
    <Flex justifyContent="space-between">
      <FooterText>© 2019 Piotr Yordanov</FooterText>
      <Flex>{items}</Flex>
    </Flex>
  </Box>
));
