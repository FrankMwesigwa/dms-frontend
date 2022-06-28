import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./routes";
import rootReducer from './store/reducers';
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
