import React, { useState, useEffect } from "react";
import * as META from "../static/meta.json";

export default Child => props => {
  const [meta, updateMeta] = useState(META.default);
  return <Child meta={meta} {...props} />;
};
