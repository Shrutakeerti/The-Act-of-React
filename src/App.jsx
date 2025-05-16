import "./App.css";
import Moviecard from "./components/Moviecard";

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 && (
        <Moviecard movie={{ title: "Tim's Film", release_date: "2024" }} />
      )}
    </>
  );
}

export default App;
