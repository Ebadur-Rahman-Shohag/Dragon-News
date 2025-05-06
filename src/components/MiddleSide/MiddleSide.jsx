import { useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";

function MiddleSide({ newsData }) {
    const [news, setNews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id == 0) setNews(newsData);
        else if (id == 1) {
            const filteredNews = newsData.filter(
                (news) => news.others.is_today_pick == true
            );
            setNews(filteredNews);
        } else {
            const filteredNews = newsData.filter(
                (news) => Number(news.category_id) === Number(id)
            );
            setNews(filteredNews);
        }
    }, [id, newsData]);

    return (
        <>
            <section className="col-span-6  ">
                <h3 className="text-xl text-dark-2 font-semibold">Dragon News Home {news.length}</h3>
                <div className="mt-5 space-y-7">
                    {news.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default MiddleSide;
