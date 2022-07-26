import "./App.css";
import { Comments } from "./components/Comments";
import { SubmitComment } from "./components/SubmitComment";

function App() {
  return (
    <div className="App">
      <Comments />
      <SubmitComment />
    </div>
  );
}

export default App;
