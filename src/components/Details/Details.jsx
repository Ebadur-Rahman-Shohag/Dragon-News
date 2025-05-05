import React from "react";
import Header from "../Header/Header";
import RightSide from "../RightSide/RightSide";
import { Link, useLoaderData } from "react-router";

function Details() {
    const data = useLoaderData();
    const newData = data[0];
    console.log(newData);
    console.log(data);
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
                                src={newData.image_url}
                                alt=""
                            />
                            <h1 className="mt-4 text-2xl font-bold">
                                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                                Military Aid Package Yet
                            </h1>
                            <p className="mt-4 text-base text-dark-3">
                                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                                Europe, Joe Biden, Military, News, Russia, Security, UK,
                                Ukraine, United States, Worthy News (Worthy News) – U.S.
                                President Joe Biden has announced nearly $3 billion in new U.S.
                                military aid for Kyiv as Ukraine marked its independence day six
                                months after Russia invaded the country.'The United States of
                                America is committed to supporting the people of Ukraine as they
                                continue the fight to defend their sovereignty. As part of that
                                commitment, I am proud to announce our biggest tranche of
                                security assistance to date: approximately $2. Wednesday, August
                                24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
                                Military, News, Russia, Security, UK, Ukraine, United States,
                                Worthy News (Worthy News) – U.S. President Joe Biden has
                                announced nearly $3 billion in new U.S. military aid for Kyiv as
                                Ukraine marked its independence day six months after Russia
                                invaded the country.'The United States of America is committed
                                to supporting the people of Ukraine as they continue the fight
                                to defend their sovereignty. As part of that commitment, I am
                                proud to announce our biggest tranche of security assistance to
                                date: approximately $2.
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
