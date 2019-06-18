import React from "react";
import { Box, Flex } from "rebass";
import { connect } from "react-redux";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

import Fonts from "./Fonts";
import GlobalStyles from "./GlobalStyles";

const withLayout = Page => {
  return props => (
    <div>
      <Fonts />
      <GlobalStyles />
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Header />
        </Box>
        <Box width={1}>
          <Page {...props} />
        </Box>
        <Box width={1}>
          <Footer />
        </Box>
      </Flex>
    </div>
  );
};

export default withLayout;
