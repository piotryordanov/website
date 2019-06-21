import React from "react";
import { Box, Flex } from "rebass";
import { compose } from "redux";
import { connect } from "react-redux";
import { createGlobalStyle } from "styled-components";

import HeaderContainer from "../containers/HeaderContainer";
import Footer from "./Footer";

import Fonts from "./Fonts";
import GlobalStyles from "./GlobalStyles";
import withTheme from "./withTheme";

const withLayout = Page => props => (
  <>
    <Fonts />
    <GlobalStyles />
    <Flex flexWrap="wrap">
      <Box width={1}>
        <HeaderContainer />
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
  </>
);
export default compose(
  withTheme,
  withLayout
);
