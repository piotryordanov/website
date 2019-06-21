import React from "react";
import * as R from "ramda";

export default (Child, key) => props =>
  R.ifElse(R.equals(0), R.always(<>Loading</>), R.always(<Child {...props} />))(
    R.length(props[key])
  );
