import Homepage from "./components/Homepage";
import Category from "./components/Category";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/category" component={Category} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
