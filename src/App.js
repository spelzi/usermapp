import { Fragment } from "react";
import MainNav from "./components/MainNav";
import Map from "./components/Map";

function App() {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Map />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
