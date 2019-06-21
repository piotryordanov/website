// pages/_app.js
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import { updateBooks } from "../data/reducers/Books.js";
import makeStore from "../data/store.js";
import theme from "./theme.js";

import * as R from "ramda";

import "./epub-zen.css";
import ProgressBar from "react-styled-clickable-progress-bar";

const renderProgressBar = () => {
  if (typeof window !== "undefined") {
    if (window.location.pathname.indexOf("post") > 0) {
      return <ProgressBar />;
    }
  }
  return <></>;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    axios
      .get("/getMeta")
      .then(response => store.dispatch(updateBooks({ data: response.data })));
    return (
      <Container>
        <Provider store={store}>
          {renderProgressBar()}
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
