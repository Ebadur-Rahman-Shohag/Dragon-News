import React from "react";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdShare } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { id, title, rating, total_view, author, thumbnail_url, details, tags } =
        news;

    const formattedDate = new Date(author.published_date).toLocaleDateString();

    return (
        <div className="border rounded-md p-4 shadow-md bg-white space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500 text-lg">
                    <MdBookmarkBorder className="cursor-pointer" />
                    <MdShare className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold leading-snug">{title}</h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-56 object-cover rounded"
            />

            {/* Details */}
            <p className="text-sm text-gray-600">
                {details.length > 200 ? details.slice(0, 200) + "..." : details}
                <Link to={`/details/${id}`}>
                    <span className="text-red-500 font-semibold ml-1 cursor-pointer">
                        Read More
                    </span>
                </Link>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-black ml-1">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
