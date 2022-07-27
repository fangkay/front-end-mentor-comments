import "./App.css";
import { Comments } from "./components/comments";
import { SubmitComment } from "./components/submitComment";

const data = require("./data.json");

function App() {
  const { comments, currentUser } = data;

  return (
    <div className="App">
      <Comments comments={comments} />
      <SubmitComment currentUser={currentUser} />
    </div>
  );
}

export default App;
