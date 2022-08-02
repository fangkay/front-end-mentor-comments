import { CommentFieldInput, Submit, SubmitCommentField } from "./style";

export const SubmitComment = (props) => {
  const addComment = () => {};

  // console.log("what is SubmitComment props", props);

  return (
    <Submit>
      <img src={props.currentUser.image.png} alt=""></img>
      <SubmitCommentField>
        <CommentFieldInput type="text" placeholder="Add a comment..." />
      </SubmitCommentField>
      {/* <form>
        <input className="" type="text" placeholder="Add a comment..."></input>
      </form> */}
      <button onClick={() => addComment()}>Send</button>
    </Submit>
  );
};
