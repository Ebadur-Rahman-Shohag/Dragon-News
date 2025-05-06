import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RightSide from "../components/RightSide/RightSide";
import { Link, useLoaderData, useParams } from "react-router";

function Details() {
    const [singleNews, setSingleNews] = useState({})
    const data = useLoaderData();
    const { id } = useParams()
    useEffect(() => {
        const news = data.find(news => news.id == id);
        setSingleNews(news)

    }, [id, data])
    console.log(singleNews);
    return (
        <>
            <section>
                <Header />
                <div className="w-full max-w-11/12 mx-auto grid grid-cols-12 gap-10">
                    <div className="col-span-9">
                        <h1 className="text-xl text-dark-2 font-semibold">Dragon News</h1>
                        <div className="mt-4 p-4 border border-gray-300 rounded-sm">
                            <img
                                className="w-full object-contain"
                                src={singleNews.image_url}
                                alt="news-image"
                            />
                            <h1 className="mt-4 text-2xl font-bold">
                                {singleNews.title}
                            </h1>
                            <p className="mt-4 text-base text-dark-3">
                                {singleNews.details}
                            </p>
                            <button className="mt-4 btn bg-btn text-white">
                                <Link to="/">Back to category</Link>
                            </button>
                        </div>
                    </div>

                    <RightSide />
                </div>
            </section>
        </>
    );
}

export default Details;
