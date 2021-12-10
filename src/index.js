import ReactDOM from "react-dom";
//Redux Stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components/App";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
