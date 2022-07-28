import {
  CommentContent,
  CommentCounter,
  CommentCurrentScore,
  CommentScore,
  Divider,
  MainComment,
  ProfileName,
} from "../comments/style";
import { SingleReply } from "./style";

export const Replies = (props) => {
  return (
    <MainComment>
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
    </MainComment>
  );
};
