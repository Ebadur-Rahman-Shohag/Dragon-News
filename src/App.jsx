import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import LatestNews from "./components/LatestNews/LatestNews";
import Navbar from "./components/Navbar/Navbar";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <>
      <Header />
      <LatestNews />
      <Navbar />
      <main className="w-full max-w-11/12 mx-auto grid grid-cols-12 gap-6">
        <LeftSide />
        <Outlet />
        <RightSide />
      </main>
    </>
  );
}

export default App;
