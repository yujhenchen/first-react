import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Hello />
      <Message />
      <Profile name="Profile Name 1" lastName="Last Name 1" />
      <Profile name="Profile Name 2" lastName="Last Name 2">
        <h3>I am the child element of the Profile component 2</h3>
      </Profile>
      <Profile name="Profile Name 3" lastName="Last Name 3" />
    </div>
  );
}

export default App;
