import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./utils/theme";
import Global from "./pages/Global";
import Collection from "./pages/Collection";
import { ContextProvider } from "./utils/Context";
import Providers from "./pages/Providers";
import Provider from "./pages/Provider";
import ContentTitles from "./pages/ContentTitles";
import ContentTitle from "./pages/ContentTitle";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ContextProvider>
          <div className="App">
            <Nav />
            <main>
              <Switch>
                <Route path="/" exact component={Global} />
                <Route path="/global" component={Global} />
                <Route path="/collections/:id" component={Collection} />
                <Route path="/providers/:id" component={Provider} />
                <Route path="/providers" component={Providers} />
                <Route path="/content/:id" component={ContentTitle} />
                <Route path="/content" component={ContentTitles} />
              </Switch>
            </main>
          </div>
        </ContextProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
