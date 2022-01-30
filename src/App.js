import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
