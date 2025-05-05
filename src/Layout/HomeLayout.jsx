import React from "react";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftSide from "../components/LeftSide/LeftSide";
import MiddleSide from "../components/MiddleSide/MiddleSide";
import RightSide from "../components/RightSide/RightSide";

function HomeLayout() {
    return (
        <>
            <LatestNews />
            <Navbar />
            <main className="w-full max-w-11/12 mx-auto grid grid-cols-12 gap-6">
                <LeftSide />
                <MiddleSide />
                <RightSide />
            </main>
        </>
    );
}

export default HomeLayout;
