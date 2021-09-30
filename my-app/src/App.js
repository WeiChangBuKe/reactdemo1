 
import './App.css';
import ComA from "./components/comA"
import ComB from "./components/comB"
function App() {
  return (
    <div className="App">
        --------------- use register -------------<br/>
      <ComA></ComA>
      --------------- use ref -------------<br/>
      <ComB></ComB>
    </div>
  );
}

export default App;
