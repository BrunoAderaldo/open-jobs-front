import { Component } from "react";
import "./styles/App.css";

import { isAuthenticated } from "./services/auth";

class App extends Component {
  componentDidMount() {
    if (isAuthenticated()) this.props.history.push("/dashboard");
    else this.props.history.push("/auth/sign-in");
  }

  render() {
    return null;
  }
}

export default App;
