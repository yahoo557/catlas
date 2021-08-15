import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="frame">
        <Router>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/routerproptest" component={RouterPropTest} />
          <Route
            path="/routerproptestresult"
            component={RouterPropTestResult}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
