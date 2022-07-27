import { Reply } from "./style";

export const Replies = (props) => {
  console.log("what is props", props);
  return (
    <Reply>
      {props.username}
      {props.createdAt}
      {props.content}
      {props.score}
      <img src={props.image} alt=""></img>
      <button>Reply</button>
    </Reply>
  );
};
