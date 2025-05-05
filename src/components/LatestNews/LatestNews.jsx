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
                        Thousands protest in Dhaka against women's rights reforms, demanding cancellation and threatening nationwide protests.
                    </p>
                    <p className="text-dark-2 text-lg font-semibold">
                        Adani Power hopes to recover $900M as Bangladesh resumes partial payments under a 2017 power deal.
                    </p>
                    <p className="text-dark-2 text-lg font-semibold">
                        Bangladesh hosts Zimbabwe for 2 Test matches, concluding a successful home series after schedule changes.
                    </p>
                </Marquee>
            </div>
        </>
    );
}

export default LatestNews;
