import React from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import classImage from "../../assets/class.png";
import swimmingImage from "../../assets/swimming.png";
import playgroundImage from "../../assets/playground.png";
function RightSide() {
    return (
        <>
            <aside className="col-span-3 ">
                <h3 className="text-xl text-dark-2 font-semibold">Login With</h3>
                <div className="mt-5 space-y-2">
                    <button className="btn bg-secondary text-white text-lg font-semibold px-7 py-7 w-full">
                        <FaGoogle /> Login With Google
                    </button>
                    <button className="btn bg-dark-4 text-white text-lg font-semibold px-7 py-7 w-full">
                        <FaGithub /> Login With Github
                    </button>
                </div>
                {/* social icons */}
                <div className="mt-8">
                    <h3 className="text-xl text-dark-2 font-semibold">Find Us On</h3>
                    <div className="mt-5">
                        <ul className="flex flex-col text-base text-dark-3">
                            <li className="border border-gray-300 px-4 py-4">
                                <a
                                    className="flex items-center gap-2"
                                    href="https://www.facebook.com/"
                                >
                                    <FaGoogle /> Facebook
                                </a>
                            </li>
                            <li className="border border-gray-300 px-4 py-4">
                                <a
                                    className="flex items-center gap-2"
                                    href="https://www.facebook.com/"
                                >
                                    <FaGithub /> Github
                                </a>
                            </li>
                            <li className="border border-gray-300 px-4 py-4">
                                <a
                                    className="flex items-center gap-2"
                                    href="https://www.facebook.com/"
                                >
                                    <FaTwitter /> Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Q-Zone */}
                <div className="bg-dark-7 p-4 mt-5">
                    <h3 className="text-xl text-dark-2 font-semibold">Q-Zone</h3>
                    <div className="mt-5 space-y-4">
                        <div className="border-2 border-gray-300 px-4 py-4 border-dashed">
                            <img className="w-full object-contain" src={classImage} alt="" />
                        </div>
                        <div className="border-2 border-gray-300 px-4 py-4 border-dashed">
                            <img className="w-full object-contain" src={swimmingImage} alt="" />
                        </div>
                        <div className="border-2 border-gray-300 px-4 py-4 border-dashed">
                            <img className="w-full object-contain" src={playgroundImage} alt="" />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default RightSide;
