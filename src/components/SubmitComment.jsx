const data = require("../data.json");

export const SubmitComment = () => {
  const { currentUser } = data;

  console.log("what is currentUser", currentUser);

  return (
    <div>
      <img src={currentUser.image.png} alt=""></img>
      <form>
        <input type="text"></input>
        <button>Send</button>
      </form>
    </div>
  );
};
