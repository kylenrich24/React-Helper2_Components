import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";

// We're using semanticui framewor

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          content="Nice blog post"
          author="Kyle"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          content="Nice blog post"
          author="Bob"
          timeAgo="Today at 10:00 AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          content="Nice blog post"
          author="John"
          timeAgo="Yesterday at 6:00PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <h4>This is a Header</h4>
        Are you sure?
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
