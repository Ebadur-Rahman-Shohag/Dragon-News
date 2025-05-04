import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
