import React from "react";
import { Flex } from "rebass";
import { connect } from "react-redux";
import GoogleFontLoader from "react-google-font-loader";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: "Open Sans", sans-serif;
    background-color: #fafafa;
  }
`;

const withLayout = Page => {
  return props => (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: "Open Sans",
            weights: [300, "300i", 400, 700, 800]
          }
        ]}
      />
      <GlobalStyle />
      <Header />
      <Page {...props} />
    </div>
  );
};

export default withLayout;
