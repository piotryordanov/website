import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import Homepage from "../components/Homepage";
import withLoading from "../components/withLoading";

export default withLoading(Homepage, "meta");
