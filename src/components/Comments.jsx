const data = require("../data.json");

export const Comments = () => {
  const { comments } = data;
  console.log("what is data", data);

  console.log("what is comments", comments);

  return (
    <div>
      <h1>Comments</h1>
      {comments.map((c) => {
        return (
          <div key={c.id}>
            {c.content}
            {c.createdAt}
            {c.score}
            {c.user.username}
            <img src={c.user.image.png} alt=""></img>
            {c.replies.map((r) => {
              return (
                <div key={r.id}>
                  {r.content}
                  {r.createdAt}
                  {r.score}
                  <img src={r.user.image.png} alt=""></img>
                  {r.user.username}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
