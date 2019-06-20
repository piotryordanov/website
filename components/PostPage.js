import React from "react";
import ReactMarkdown from "react-markdown";

const Index = props => (
  <div className="post__content__container">
    <div className="zen">
      <ReactMarkdown source={props.content} />
    </div>
  </div>
);

export default Index;
