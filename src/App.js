import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";

import AppRoutes from "./routes";
import store from "./store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <GlobalStyle />
          <Normalize />
          <AppRoutes />   
      </Provider>
    </BrowserRouter>
  );
}

export default App;
