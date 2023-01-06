import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";

import AppRoutes from "./routes";
import store from "./store";
import ColorsNotas from "./styles/ColorsNotas"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <ColorsNotas> */}
          <GlobalStyle />
          <Normalize />
          <AppRoutes />
        {/* </ColorsNotas> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
