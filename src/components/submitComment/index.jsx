import { Submit } from "./style";

export const SubmitComment = (props) => {
  const addComment = () => {};

  return (
    <Submit>
      <img src={props.currentUser.image.png} alt=""></img>
      <form>
        <input type="text" placeholder="Add a comment..."></input>
        <button onClick={() => addComment()}>Send</button>
      </form>
    </Submit>
  );
};
