import React from "react";
import Marquee from "react-fast-marquee";

function LatestNews() {
    return (
        <>
            <div className=" bg-dark-7 flex w-full max-w-11/12 mx-auto gap-5 p-4 items-center">
                <button className="btn bg-btn px-8 py-7 text-xl font-medium text-white">
                    Latest
                </button>
                <Marquee speed={70} pauseOnHover={true} className="space-x-10">
                    <p className="text-dark-2 text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                        nesciunt deleniti pariatur odit voluptate corrupti omnis repellendus
                        natus voluptatibus,
                    </p>
                    <p className="text-dark-2 text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                        nesciunt deleniti pariatur odit voluptate corrupti omnis repellendus
                        natus voluptatibus,
                    </p>
                    <p className="text-dark-2 text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                        nesciunt deleniti pariatur odit voluptate corrupti omnis repellendus
                        natus voluptatibus,
                    </p>
                </Marquee>
            </div>
        </>
    );
}

export default LatestNews;
