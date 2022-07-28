import { Replies } from "../replies";
import {
  Comment,
  CommentContent,
  CommentCounter,
  CommentCurrentScore,
  CommentProfile,
  CommentScore,
  MainComment,
  ProfileName,
} from "./style";

export const Comments = (props) => {
  return (
    <div>
      {props.comments.map((c) => {
        return (
          <Comment key={c.id}>
            <MainComment>
              <CommentScore>
                <CommentCounter>+</CommentCounter>
                <CommentCurrentScore>{c.score}</CommentCurrentScore>
                <CommentCounter>-</CommentCounter>
              </CommentScore>
              <CommentContent>
                <CommentProfile>
                  <img src={c.user.image.png} alt=""></img>
                  <ProfileName>{c.user.username}</ProfileName>
                  {c.createdAt}
                </CommentProfile>
                {c.content}
              </CommentContent>
            </MainComment>
            {c.replies.map((r) => {
              return (
                <Replies
                  props={r}
                  key={r.id}
                  content={r.content}
                  image={r.user.image.png}
                  createdAt={r.createdAt}
                  score={r.score}
                  username={r.user.username}
                />
              );
            })}
          </Comment>
        );
      })}
    </div>
  );
};
