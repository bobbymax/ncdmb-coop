import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ExportToCsv from "./ExportToCsv";

ReactDOM.render(
  <ExportToCsv />,
  // <Provider store={store}>
  //   <Router>
  //     <App />
  //   </Router>
  // </Provider>,
  document.getElementById("root")
);
