import React from "react";
import { Box, Flex } from "rebass";
import { connect } from "react-redux";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

import Fonts from "./Fonts";
import GlobalStyles from "./GlobalStyles";

const withLayout = Page => props => (
  <div>
    <Fonts />
    <GlobalStyles />
    <Flex flexWrap="wrap">
      <Box width={1}>
        <Header />
      </Box>
      <Box width={1}>
        <Box py={0.5} px={2} m={"auto"} width={[1, 1 / 2, 1, 1040]}>
          <Page {...props} />
        </Box>
      </Box>
      <Box width={1}>
        <Footer />
      </Box>
    </Flex>
  </div>
);
export default withLayout;
