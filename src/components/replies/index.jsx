import {
  CommentContent,
  CommentCounter,
  CommentCurrentScore,
  CommentScore,
  ProfileName,
} from "../comments/style";

import { Reply } from "./style";

export const Replies = (props) => {
  return (
    <Reply>
      <CommentScore>
        <CommentCounter>+</CommentCounter>
        <CommentCurrentScore>{props.score}</CommentCurrentScore>
        <CommentCounter>-</CommentCounter>
      </CommentScore>
      <CommentContent>
        <ProfileName>{props.username}</ProfileName>
        {props.createdAt}
        {props.content}
        <img src={props.image} alt=""></img>
      </CommentContent>
    </Reply>
  );
};
