import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import DragNDrop from "./components/commons/DragNDrop";
import DragDropComponent from "./components/commons/DragDropComponent";

ReactDOM.render(
  <DragDropComponent />,
  // <Provider store={store}>
  //   <Router>
  //     <App />
  //   </Router>
  // </Provider>,
  document.getElementById("root")
);
