import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";

import AppRoutes from "./routes";
import store from "./store";
import MyContext from "./context/MyContext";
import { useState } from "react";

function App() {
  const [idAtual, setIdAtual] = useState(null)
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MyContext.Provider value={{idAtual, setIdAtual}}>
          <GlobalStyle />
          <Normalize />
          <AppRoutes />
        </MyContext.Provider>      
      </Provider>
    </BrowserRouter>
  );
}

export default App;
