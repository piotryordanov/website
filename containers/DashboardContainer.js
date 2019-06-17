import React from "react";
import { connect } from "react-redux";
import withLayout from "../components/withLayout";

import Dashboard from "../components/Dashboard";

const Index = props => <Dashboard {...props} />;

function mapStateToProps(state) {
  return { title: state.UI.title };
}

export default connect(mapStateToProps)(Index);
