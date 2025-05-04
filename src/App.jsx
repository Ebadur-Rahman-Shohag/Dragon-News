import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
