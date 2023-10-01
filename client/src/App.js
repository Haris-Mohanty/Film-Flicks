import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section>
        <Header />
        <Routes>
          <Route path="/movie" />
        </Routes>
      </section>
    </>
  );
}

export default App;
