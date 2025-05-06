import React from "react";
import MiddleSide from "../MiddleSide/MiddleSide";
import { useLoaderData } from "react-router";

function News() {
    const newsData = useLoaderData();
    return (
        <>
            <MiddleSide newsData={newsData} />
        </>
    );
}

export default News;
