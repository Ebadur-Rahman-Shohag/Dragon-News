import React, { use } from 'react'
import NewsCard from '../NewsCard/NewsCard'

const newsPromise = fetch("../../../public/news.json").then(res => res.json())

function MiddleSide() {
    const newsData = use(newsPromise)
    return (
        < >
            <section className='col-span-6  '>
                <h3 className='text-xl text-dark-2 font-semibold'>Dragon News Home</h3>
                <div className='mt-5 space-y-7'>
                    {newsData.map((news) => (
                        <NewsCard news={news} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default MiddleSide