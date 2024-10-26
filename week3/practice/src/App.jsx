import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { members } from "../src/data/members";

function App() {
  return (
    <>
      <Header />
      <Card members={members} />
    </>
  );
}

export default App;
