import React from "react";
import { Flex } from "rebass";
import { connect } from "react-redux";
import GoogleFontLoader from "react-google-font-loader";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  font-family: "Titillium Web", sans-serif;
  }
`;

const withLayout = Page => {
  return props => (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"]
          },
          {
            font: "Titillium Web",
            weights: [300, 400, 700]
          }
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <GlobalStyle />
      <Header />
      <Page {...props} />
    </div>
  );
};

export default withLayout;
