import { Replies } from "../replies";
import { Comment } from "./style";

export const Comments = (props) => {
  console.log("what is props", props);

  return (
    <div>
      <h1>Comments</h1>
      {props.comments.map((c) => {
        return (
          <Comment key={c.id}>
            {c.content}
            {c.createdAt}
            {c.score}
            {c.user.username}
            <img src={c.user.image.png} alt=""></img>
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
