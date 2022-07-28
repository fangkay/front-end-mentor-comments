import "./App.css";
import { Comments } from "./components/comments";
import { SubmitComment } from "./components/submitComment";
import { GlobalStyle } from "./globalStyles";

const data = require("./data.json");

function App() {
  const { comments, currentUser } = data;

  return (
    <div className="App">
      <GlobalStyle />
      <Comments comments={comments} />
      <SubmitComment currentUser={currentUser} />
    </div>
  );
}

export default App;
