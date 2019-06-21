import React from "react";

import ProgressBar from "react-styled-clickable-progress-bar";

export default () => {
  if (typeof window !== "undefined") {
    if (window.location.pathname.indexOf("post") > 0) {
      return <ProgressBar />;
    }
  }
  return <></>;
};
