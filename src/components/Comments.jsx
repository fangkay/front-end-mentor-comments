const comments = require("../data.json");

export const Comments = () => {
  console.log("what is comments", comments);

  return <h1>These are the comments</h1>;
};
