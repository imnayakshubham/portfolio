import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
const HomeComponent = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Suspense
              fallback={
                <div
                  style={{
                    fontSize: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  Hello World!!
                </div>
              }
            >
              <Header />
              <HomeComponent />
            </Suspense>
          </Route>
          <Route exact path={"*"}>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
