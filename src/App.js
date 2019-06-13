import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./utils/theme";
import Home from "./pages/Home";
import Global from "./pages/Global";
import Client from "./pages/Client";
import Collection from "./components/Collection";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/clients/:id" component={Client} />
              <Route path="/clients" component={Home} />
              <Route path="/global" component={Global} />
              <Route path="/collections/:id" component={Collection} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
