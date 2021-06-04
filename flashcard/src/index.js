import React from "react";
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./Reducers";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/App";
import Stack from "./components/Stack";
import StackForm from './components/StackForm';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { setStack } from "./Actions";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(setStack({ title: "example", cards:[] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/stack" component={Stack} />
        <Route path="/stack-form" component={StackForm} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
