import React from "react";
import ReactMarkdown from "react-markdown";

// import "./epub-zen.css"

const input = "# This is a header\n\nAnd `this` *is* a **paragraph**";
const Index = (props) => <ReactMarkdown source={props.data} />;

export default Index;
